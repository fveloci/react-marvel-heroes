import { StorySummary } from "./storySummary";

export interface StoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: StorySummary[];
}