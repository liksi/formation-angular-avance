import { Injectable } from '@angular/core';
import AlbumsJson from '../../../assets/albums.json';
import { Album } from "../../model/album.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  getAlbumById(id: number): Promise<Album> {
    let album = AlbumsJson.find(a => a.id == id);
    return Promise.resolve(album as Album);
  }

  getAllAlbums(): Promise<Album[]> {
    return Promise.resolve(AlbumsJson as Album[]);
  }

  countAllAlbums(): Promise<number> {
    return Promise.resolve(AlbumsJson.length);
  }

  countAlbumsByArtist(idArtist: number): Promise<number> {
    let nbAlbums = AlbumsJson.filter(a => a.artist.id == idArtist).length;
    return Promise.resolve(nbAlbums);
  }
}
