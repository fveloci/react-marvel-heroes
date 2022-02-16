import { ComicList } from "./comicList";
import { EventList } from "./eventList";
import { StoryList } from "./storyList";
import { Image } from "./image";
import { Url } from "./url";
import { SeriesList } from "./seriesList";


export interface Hero {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    event: EventList;
    series: SeriesList;
}