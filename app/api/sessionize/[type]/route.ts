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

    try {
        const response = await fetch(apiEndpoint, {
            cache: "no-store",
            headers: {
                "Cache-Control": "no-store", // ✅ Force fresh data
            },
        });

        if (!response.ok) {
            return NextResponse.json({ error: `Failed to fetch ${type} data` }, { status: 500 });
        }

        const data = await response.json();

        return NextResponse.json({ fromCache: false, data });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
