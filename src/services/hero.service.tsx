import axios, { AxiosResponse } from "axios"
import { CharacterDataWrapper } from "../models/characterDataWrapper";

export const getHeroes = (limit = 10, offset?: number): Promise<AxiosResponse<CharacterDataWrapper>> => {
    const url: string = (import.meta.env.VITE_API_URL as string);
    const apiKey: string = (import.meta.env.VITE_API_KEY as string);    
    return axios.get<CharacterDataWrapper>(`${url}/characters?apikey=${apiKey}&limit=${limit}&offset=${offset}`)
}