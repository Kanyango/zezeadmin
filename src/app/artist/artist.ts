import { Component } from '@angular/core';

@Component({
  selector: 'artist-component',
  templateUrl: './artist.html'
})
export class ArtistsComponent
{
  all_artists = [{'name': 'Dada dama',
                 'status': 'Pending',
                 'photo': 'assets/images/jenny.jpg'},
                 {'name': 'Mwajuma',
                  'status': 'Pending',
                  'photo': 'assets/images/lindsay.png'},
                  {'name': 'Zuriel',
                   'status': 'Pending',
                   'photo': 'assets/images/veronika.jpg'},
                   {'name': 'Fadhili',
                    'status': 'Approved',
                    'photo': 'assets/images/daniel.jpg'},
                   {'name': 'Rehema',
                    'status': 'Approved',
                    'photo': 'assets/images/helen.jpg'},
                   {'name': 'Baraka',
                   'status': 'Approved',
                   'photo': 'assets/images/elliot.jpg'},
                   {'name': 'Amani',
                   'status': 'Pending',
                   'photo': 'assets/images/matthew.png'},
                   {'name': 'Faraja',
                   'status': 'Pending',
                   'photo': 'assets/images/kristy.png'}
               ]

}
