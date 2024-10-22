import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../Book';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.afbeeldingURL" alt="Exterior photo of {{housingLocation.afbeeldingURL}}">
      <h2 class="listing-heading">{{ housingLocation.titel }}</h2>
      <p class="listing-location">{{ housingLocation.auteur}}</p>
      <a [routerLink]="['/details']">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {

  @Input() housingLocation!: HousingLocation;

}