import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule }   from '@angular/router';
import {SuiModule} from 'ng2-semantic-ui';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash';
import { ArtistsComponent } from './artist/artist';
import { ArtistDetailComponent } from './artist/art_detail';
import { CatalogueComponent } from './catalogue/catalogue';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    ArtistsComponent,
    ArtistDetailComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
