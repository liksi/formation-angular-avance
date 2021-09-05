import { Artist } from "./artist.model";

export interface Album {
    id: number,
    name: string,
    description?: string
    artist: Artist,
    note: number,
    date: string
}