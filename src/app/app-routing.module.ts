import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from "./component/user/user-edit/user-edit.component";
import { HomeComponent } from "./component/home/home.component";
import { AlbumListComponent } from "./component/album/album-list/album-list.component";

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
