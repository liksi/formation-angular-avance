import { Component, Input, OnInit } from '@angular/core';
import { Artist } from "../../../model/artist.model";
import { AlbumService } from "../../../service/album/album.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input()
  artist?: Artist;

  nbAlbums: number = 0;

  constructor(private albumService: AlbumService) {
  }

  ngOnInit(): void {
    if(this.artist && this.artist.id) {
      this.albumService.countAlbumsByArtist(this.artist.id).subscribe(
        nbAlbums => this.nbAlbums = nbAlbums,
        error => console.log(error)
      )
    }
  }
}
