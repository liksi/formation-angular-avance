import { Component, OnInit } from '@angular/core';
import { AlbumService } from "../../../service/album/album.service";
import { Album } from "../../../model/album.model";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(
    private albumService: AlbumService
  ) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().then(
      albums => this.albums = albums as Album[],
      error => console.log(error)
    )
  }
}
