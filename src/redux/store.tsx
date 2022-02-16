import { configureStore } from "@reduxjs/toolkit";
import { Hero } from "../models/hero.model";
import { heroSlice } from "./states/hero.state";

export interface AppStore {
    hero: Hero;
}

export default configureStore<AppStore>({
    reducer: {
        hero: heroSlice.reducer

    }
})