import { SESSIONIZE_API_URL } from "@/lib/constants";
import { NextResponse } from "next/server";

// ✅ Disable Vercel caching
export const dynamic = "force-dynamic";

const DEFAULT_SESSION_ID = "jl4ktls0"; // Default session ID
const VALID_TYPES = ["Speakers", "GridSmart", "Sessions"]; // Valid types

export async function GET(req: Request, { params }: { params: { type: string } }) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("sessionId") ?? DEFAULT_SESSION_ID;
    const type = params.type;

    // ❌ Reject invalid types
    if (!VALID_TYPES.includes(type)) {
        return NextResponse.json({ error: "Invalid request type." }, { status: 400 });
    }

    const apiEndpoint = `${SESSIONIZE_API_URL}/${sessionId}/view/${type}`;
    const TIMEOUT_MS = 15000; // 15 second timeout
    const MAX_RETRIES = 2;

    // Helper function to fetch with timeout
    const fetchWithTimeout = async (url: string, timeout: number): Promise<Response> => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);
        
        try {
            const response = await fetch(url, {
                cache: "no-store",
                signal: controller.signal,
                headers: {
                    "Cache-Control": "no-store",
                },
            });
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    };

    // Retry logic
    let lastError: Error | null = null;
    try {
        for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
            try {
                if (attempt > 0) {
                    // Wait before retry (exponential backoff)
                    await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
                }

                const response = await fetchWithTimeout(apiEndpoint, TIMEOUT_MS);

                if (!response.ok) {
                    const errorText = await response.text().catch(() => "Unknown error");
                    console.error(`Sessionize API error for ${type}:`, {
                        status: response.status,
                        statusText: response.statusText,
                        url: apiEndpoint,
                        error: errorText
                    });
                    return NextResponse.json({ 
                        error: `Failed to fetch ${type} data from Sessionize API`,
                        details: response.statusText,
                        status: response.status
                    }, { status: response.status >= 400 && response.status < 500 ? response.status : 500 });
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    const text = await response.text();
                    console.error(`Invalid response type for ${type}:`, {
                        contentType,
                        preview: text.substring(0, 200)
                    });
                    return NextResponse.json({ 
                        error: `Invalid response format from Sessionize API for ${type}`,
                        details: "Expected JSON but received different content type"
                    }, { status: 500 });
                }

                const data = await response.json();

                if (!data) {
                    console.error(`Empty data received for ${type}`);
                    return NextResponse.json({ 
                        error: `Empty data received from Sessionize API for ${type}`
                    }, { status: 500 });
                }

                return NextResponse.json({ fromCache: false, data });
            } catch (error) {
                lastError = error instanceof Error ? error : new Error(String(error));
                
                // If it's the last attempt, break to outer catch
                if (attempt === MAX_RETRIES) {
                    break;
                }
                
                // Log retry attempt
                console.warn(`Attempt ${attempt + 1} failed for ${type}, retrying...`, {
                    error: lastError.message,
                    url: apiEndpoint
                });
            }
        }

        // If we get here, all retries failed
        throw lastError || new Error("Unknown error");
    } catch (error) {
        const isTimeout = error instanceof Error && (error.name === 'AbortError' || error.message.includes('timeout'));
        const isNetworkError = error instanceof Error && (error.message === 'fetch failed' || error.message.includes('ECONNREFUSED') || error.message.includes('ENOTFOUND'));
        
        console.error(`Error fetching ${type} data after ${MAX_RETRIES + 1} attempts:`, {
            error: error instanceof Error ? error.message : String(error),
            errorType: isTimeout ? 'timeout' : isNetworkError ? 'network' : 'unknown',
            url: apiEndpoint
        });
        
        return NextResponse.json({ 
            error: isTimeout 
                ? `Request timeout: Sessionize API took too long to respond for ${type}`
                : isNetworkError
                ? `Network error: Unable to connect to Sessionize API for ${type}`
                : "Internal Server Error",
            details: error instanceof Error ? error.message : String(error),
            retries: MAX_RETRIES
        }, { status: 500 });
    }
}
