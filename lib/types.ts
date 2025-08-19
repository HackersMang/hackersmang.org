export interface EventDetailProps {
    title: string;
    subtitle?: string;
    happeningOn: Date;
    locationName: string;
    locationUrl: string;
    tracks: {
        name: string;
        registrationLink: string | null;
        buttonText?: string;
    }[] | null;
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
    callForSpeakerLink?: string | null;
    callForSpeakerStartOn?: Date | null;
    callForSpeakerEndOn?: Date | null;

    isSchedulePublished?: boolean;
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
    registrationLink?: string | null;
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
    buttonText?: string;
    disableCodeOfConduct?: boolean;
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
            categories: Category[];
        }[];
    }[];
}

export interface CategoryItem {
    id: number;
    name: string;
}

export interface Category {
    id: number;
    name: string;
    categoryItems: CategoryItem[];
    sort: number;
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
        }[],
        categories: Category[]
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

export interface ComingSoonProps {
    title: string
    message: string
}

export interface TrackRegistration {
    track: string;
    registrationLink: string | null;
    buttonText: string;
}

export interface ScheduleWithRegisterProps extends ScheduleProps {
    trackRegistrations: TrackRegistration[];
    registrationStartOn?: Date | null;
    registrationEndOn?: Date | null;
}

export type EventTrack = {
  name: string;
  registrationLink: string | null;
  buttonText?: string;
};

// Utility types for tags functionality
export type SessionTags = CategoryItem[];

export type ExtractTagsFromSession = (session: SessionListProps['sessions'][0]) => SessionTags;

// Helper function type to get all unique tags from categories
export type GetAllTags = (categories: Category[]) => CategoryItem[];