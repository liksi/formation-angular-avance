import { Component, Input, OnInit } from '@angular/core';
import { Artist } from "../../../model/artist.model";
import { AlbumService } from "../../../service/album/album.service";
import { ArtistService } from "../../../service/artist/artist.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  @Input()
  artist?: Artist;

  @Input()
  editable: boolean = false;

  nbAlbums: number = 0;

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService
  ) {
  }

  ngOnInit(): void {
    if(this.artist && this.artist.id) {
      this.albumService.countAlbumsByArtist(this.artist.id).subscribe(
        nbAlbums => this.nbAlbums = nbAlbums,
        error => console.log(error)
      )
    }
  }

  deleteArtist(): void {
    if (this.artist) {
      this.artistService.deleteArtist(this.artist.id).subscribe(
        result => {
          if (result) {
            this.artist = undefined;
          }
        });
    }
  }
}
