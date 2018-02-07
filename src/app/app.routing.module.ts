import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './login/login';
// import { DashComponent } from './dash/dash';
// import { MyArtistComponent } from './artists/artists';
// import { ArtistDetailComponent } from './artist_detail/detail';
import { ArtistsComponent } from './artist/artist';
import { ArtistDetailComponent } from './artist/art_detail';

const routes: Routes = [
        //{ path: '', redirectTo: 'home', pathMatch: 'full'},
        // { path: 'login', component: LoginComponent},
        // { path: 'dash', component: DashComponent},
         { path: 'artists', component: ArtistsComponent},
         { path: 'artist_detail', component: ArtistDetailComponent}
        // { path: 'details', component: ArtistDetailComponent},
        // { path: 'playlist', component: PlaylistsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
