import { ComicSummary } from "./comicSummary";

export interface ComicList {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicSummary[];
}