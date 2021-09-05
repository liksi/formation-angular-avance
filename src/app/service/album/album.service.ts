import { Injectable } from '@angular/core';
import AlbumsJson from '../../../assets/albums.json';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  getAlbumById(id: number): Promise<any> {
    let album = AlbumsJson.find(a => a.id == id);
    return Promise.resolve(album)
  }

  getAllAlbums(): Promise<any> {
    return Promise.resolve(AlbumsJson)
  }

  countAllAlbums(): Promise<number> {
    return Promise.resolve(AlbumsJson.length)
  }
}
