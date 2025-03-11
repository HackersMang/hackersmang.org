export interface EventDetailProps {
    title: string;
    subtitle?: string;
    happeningOn: Date;
    locationName: string;
    locationUrl: URL;
    registrationLink?: URL | null;
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
    callForSpeakerLink?: URL | null;
    callForSpeakerStartOn?: Date | null;
    callForSpeakerEndOn?: Date | null;
    sessionizeApiId?: string | null;
}

export interface IntroProps {
    title: string;
    subtitle?: string;
}

export interface VenueInfoProps {
    locationName: string;
    locationUrl: string;
    happeningOn: Date
}

export interface RegisterProps {
    registrationLink?: URL | null;
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
}

// Define the SessionizeSpeakers interface
export interface SessionizeSpeakers {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    tagLine: string;
    profilePicture: string;
    isTopSpeaker: boolean;
}

// Define the GridSmart interface
export interface GridSmart {
    rooms: {
        id: number;
        name: string;
        sessions: {
            id: string;
            title: string;
            description: string;
            startsAt: string;
            endsAt: string;
            isServiceSession: boolean;
            isPlenumSession: boolean;
            speakers: {
                id: string;
                name: string;
                // Updated to include profile picture
                profilePicture?: string;
            }[];
        }[];
    }[];
}

export interface SessionListProps {
    sessions: {
        id: string
        title: string
        description: string
        startsAt: string
        endsAt: string
        isServiceSession: boolean
        isPlenumSession: boolean
        speakers: {
            id: string
            name: string
            profilePicture?: string
        }[]
    }[]
}

export interface ScheduleProps {
    sessionId: string | null | undefined;
}
export interface Resource {
    title: string
    speaker: string
    resources: {
        title: string
        url: string
        type: "presentation" | "code" | "external"
    }[]
}

export interface ResourceListProps {
    resources: Resource[]
}