import { Injectable } from '@angular/core';
import ArtistsJson from "../../../assets/artists.json";
import { Artist } from "../../model/artist.model";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  getArtistById(id: number): Promise<Artist> {
    let artist = ArtistsJson.find(a => a.id == id);
    return Promise.resolve(artist as Artist);
  }

  getAllArtists(): Promise<Artist[]> {
    return Promise.resolve(ArtistsJson as Artist[]);
  }
}
