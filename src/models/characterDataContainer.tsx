import { Hero } from "./hero.model";

export interface CharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: Hero[];
}