import { Component, OnInit } from '@angular/core';
import { Artist, ArtistTypeEnum } from "../../../model/artist.model";
import { ArtistService } from "../../../service/artist/artist.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.scss']
})
export class ArtistCreateComponent {

  artist: Artist = {
    id: 0,
    firstname: "",
    surname: "",
    birthdate: "",
    type: ArtistTypeEnum.SOLO
  }

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) {
  }

  addArtist() {
    this.artistService.addArtist(this.artist);
    this.router.navigate(['/artists']);
  }
}
