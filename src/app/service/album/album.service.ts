import { Injectable } from '@angular/core';
import AlbumsJson from '../../../assets/albums.json';
import { Album } from "../../model/album.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  getAlbumById(id: number): Observable<Album> {
    let album = AlbumsJson.find(a => a.id == id);
    return of(album as Album);
  }

  getAllAlbums(): Observable<Album[]> {
    return of(AlbumsJson as Album[]);
  }

  countAllAlbums(): Observable<number> {
    return of(AlbumsJson.length);
  }

  countAlbumsByArtist(idArtist: number): Observable<number> {
    let nbAlbums = AlbumsJson.filter(a => a.artist.id == idArtist).length;
    return of(nbAlbums);
  }
}
