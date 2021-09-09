import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { HomeComponent } from './component/home/home.component';
import { AlbumListComponent } from './component/album/album-list/album-list.component';
import { AlbumDetailComponent } from './component/album/album-detail/album-detail.component';
import { ArtistDetailComponent } from "./component/artist/artist-detail/artist-detail.component";
import { ArtistListComponent } from './component/artist/artist-list/artist-list.component';
import { IndividuPipe } from './pipe/individu.pipe';
import { ArtistTypePipe } from './pipe/artist-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserEditComponent,
    HomeComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    ArtistDetailComponent,
    ArtistListComponent,
    IndividuPipe,
    ArtistTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
