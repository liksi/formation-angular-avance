import { Component, OnInit } from '@angular/core';
import { AlbumService } from "../../service/album/album.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nbAlbums: number = 0;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    this.albumService.countAllAlbums().then(
      count => this.nbAlbums = count,
      error => console.log(error)
    )
  }

}
