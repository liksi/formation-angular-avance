import { Injectable } from '@angular/core';
import ArtistsJson from "../../../assets/artists.json";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  getArtistById(id: number): Promise<any> {
    let album = ArtistsJson.find(a => a.id == id);
    return Promise.resolve(album)
  }

  getAllArtists(): Promise<any> {
    return Promise.resolve(ArtistsJson)
  }
}
