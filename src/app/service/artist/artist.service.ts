import { Injectable } from '@angular/core';
import ArtistsJson from "../../../assets/artists.json";
import { Artist } from "../../model/artist.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  getArtistById(id: number): Observable<Artist> {
    let artist = ArtistsJson.find(a => a.id == id);
    return of(artist as Artist);
  }

  getAllArtists(): Observable<Artist[]> {
    return of(ArtistsJson as Artist[]);
  }
}
