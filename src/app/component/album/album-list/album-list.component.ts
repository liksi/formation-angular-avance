import { Component, OnInit } from '@angular/core';
import { AlbumService } from "../../../service/album/album.service";
import { Album } from "../../../model/album.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];

  constructor(
    private albumService: AlbumService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.albumService.getAllAlbums().then(
      albums => this.albums = albums,
      error => console.log(error)
    )
  }

  navigateToDetail(albumId: number) {
    this.router.navigate(['/album', albumId]);
  }
}
