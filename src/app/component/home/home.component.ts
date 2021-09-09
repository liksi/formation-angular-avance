import { Component, OnInit } from '@angular/core';
import { AlbumService } from "../../service/album/album.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  nbAlbums?: Promise<number>;

  constructor(private albumService: AlbumService) {
    this.nbAlbums = this.albumService.countAllAlbums();
  }
}
