import { Component, OnInit } from '@angular/core';
import { Artist, ArtistTypeEnum } from "../../../model/artist.model";
import { Album } from "../../../model/album.model";
import { Observable } from "rxjs";
import { ArtistService } from "../../../service/artist/artist.service";
import { AlbumService } from "../../../service/album/album.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.scss']
})
export class AlbumCreateComponent {

  album: Album = {
    id: 0,
    name: "",
    description: "",
    artist: undefined,
    note: 0,
    date: "",
  }

  artists?: Observable<Artist[]>;

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService,
    private router: Router
  ) {
    this.artists = artistService.getAllArtists();
  }

  addAlbum() {
    this.albumService.addAlbum(this.album);
    this.router.navigate(['/albums']);
  }
}
