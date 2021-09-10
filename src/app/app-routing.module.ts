import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from "./component/user/user-edit/user-edit.component";
import { HomeComponent } from "./component/home/home.component";
import { AlbumListComponent } from "./component/album/album-list/album-list.component";
import { AlbumDetailComponent } from "./component/album/album-detail/album-detail.component";
import { ArtistListComponent } from "./component/artist/artist-list/artist-list.component";
import { ArtistCreateComponent } from "./component/artist/artist-create/artist-create.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'album/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artist/create',
    component: ArtistCreateComponent
  },
  {
    path: 'edit-user',
    component: UserEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
