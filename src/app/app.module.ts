import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//services
import {SpotifyService} from './services/spotify.services';

//components 
import { AppComponent }  from './app.component';
import {AboutComponent} from './components/about/about.component'; 
import {NavbarComponent} from './components/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component'; 
import {AlbumComponent} from './components/album/album.component'; 


import {routing} from './app.routing'; 


@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                  FormsModule,
                  routing],
  providers: [SpotifyService],
  declarations: [ AppComponent, 
                  AboutComponent, 
                  NavbarComponent, 
                  SearchComponent,
                  ArtistComponent,
                  AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
