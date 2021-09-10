import { Injectable } from '@angular/core';
import ArtistsJson from "../../../assets/artists.json";
import { Artist } from "../../model/artist.model";
import { Observable, of } from "rxjs";
import { User } from "../../model/user.model";
import { AlbumService } from "../album/album.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  artists: Artist[] = [];

  constructor(private albumService: AlbumService) {
    let artistsAsString = localStorage.getItem('artists');
    if (!artistsAsString) {
      this.artists = ArtistsJson as Artist[];
      this.saveArtistsInLocalStorage();
    } else {
      this.artists = JSON.parse(artistsAsString);
    }
  }

  getArtistById(id: number): Observable<Artist> {
    let artist = this.artists.find(a => a.id == id);
    return of(artist as Artist);
  }

  getAllArtists(): Observable<Artist[]> {
    return of(this.artists);
  }

  addArtist(artist: Artist) {
    if (!this.artists.find(a => a.id === artist.id)) {
      this.artists.push(artist);
      this.saveArtistsInLocalStorage();
    }
    console.log("Impossible d'ajouter");
  }

  deleteArtist(id: number): Observable<boolean> {
    return this.albumService.countAlbumsByArtist(id).pipe(map(count => {
      if (count === 0) {
        this.artists.forEach(((value, index) => {
          if (value.id === id) {
            this.artists.splice(index, 1);
          }
        }));
        this.saveArtistsInLocalStorage();
        return true;
      }
      console.log("Impossible de supprimer")
      return false;
    }));
  }

  private saveArtistsInLocalStorage(): void {
    localStorage.setItem('artists', JSON.stringify(this.artists));
  }
}
