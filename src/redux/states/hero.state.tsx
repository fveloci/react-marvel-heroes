import { createSlice } from "@reduxjs/toolkit";
import { Hero } from "../../models/hero.model";

export const HeroEmptyState: Hero = {
    id: 0,
    name: '',
    description: ''
}

export const heroSlice = createSlice({
    name: 'hero',
    initialState: HeroEmptyState,
    reducers: {
        createHero: (state, action) => action.payload,
        modifyHero: (state, action) => ({ ...state, ...action.payload }),
        resetHero: () => HeroEmptyState
    }
})

export const { createHero, modifyHero, resetHero } = heroSlice.actions;

export default heroSlice.reducer;