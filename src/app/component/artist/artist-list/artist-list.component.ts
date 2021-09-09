import { Component, OnInit } from '@angular/core';
import { ArtistService } from "../../../service/artist/artist.service";
import { Artist } from "../../../model/artist.model";

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[] = [];

  selectedArtist?: Artist;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getAllArtists().then(
      artists => this.artists = artists,
      error => console.log(error)
    )
  }

}
