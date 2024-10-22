import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../Book';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.afbeeldingURL"
        alt="Exterior photo of {{housingLocation?.titel}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.titel}}</h2>
        <p class="listing-location">{{housingLocation?.auteur}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this book</h2>
        <ul>
          <li>Books available: {{housingLocation?.aantalExemplaren}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Ask for book availability</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  // constructor() {
  //   const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

}