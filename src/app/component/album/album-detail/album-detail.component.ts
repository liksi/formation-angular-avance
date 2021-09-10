import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Album } from "../../../model/album.model";
import { AlbumService } from "../../../service/album/album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.scss']
})
export class AlbumDetailComponent implements OnInit {

  album?: Album;

  constructor(
    private albumService: AlbumService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const albumId = params.id;
      this.loadAlbum(albumId);
    })
  }

  loadAlbum(albumId: number) {
    this.albumService.getAlbumById(albumId).subscribe(
      album => this.album = album,
      error => console.log(error)
    )
  }

  deleteAlbum(): void {
    if (this.album) {
      this.albumService.deleteAlbum(this.album.id).subscribe(
        result => {
          if (result) {
            this.router.navigate(['/albums']);
          }
        });
    }
  }
}
