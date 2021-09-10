import { Injectable } from '@angular/core';
import AlbumsJson from '../../../assets/albums.json';
import { Album } from "../../model/album.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  albums: Album[] = [];

  constructor() {
    let albumsAsString = localStorage.getItem('albums');
    if (!albumsAsString) {
      this.albums = AlbumsJson as Album[];
      this.saveAlbumsInLocalStorage();
    } else {
      this.albums = JSON.parse(albumsAsString);
    }
  }

  getAlbumById(id: number): Observable<Album> {
    let album = this.albums.find(a => a.id == id);
    return of(album as Album);
  }

  getAllAlbums(): Observable<Album[]> {
    return of(this.albums as Album[]);
  }

  countAllAlbums(): Observable<number> {
    return of(this.albums.length);
  }

  countAlbumsByArtist(idArtist: number): Observable<number> {
    let nbAlbums = this.albums.filter(a => a.artist?.id == idArtist).length;
    return of(nbAlbums);
  }

  addAlbum(album: Album) {
    if (!this.albums.find(a => a.id === album.id)) {
      this.albums.push(album);
      this.saveAlbumsInLocalStorage();
    }
    console.log("Impossible d'ajouter");
  }

  deleteAlbum(id: number): Observable<boolean> {
      this.albums.forEach(((value, index) => {
        if (value.id === id) {
          this.albums.splice(index, 1);
        }
      }));
      this.saveAlbumsInLocalStorage();
      return of(true);
  }

  private saveAlbumsInLocalStorage(): void {
    localStorage.setItem('albums', JSON.stringify(this.albums));
  }
}
