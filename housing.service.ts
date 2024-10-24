import { Injectable } from '@angular/core';
import { HousingLocation } from './Book';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      titel: "Introduction to Algorithms",
      auteur: "Thomas H. Cormen",
      aantalExemplaren: 5,
      afbeeldingURL: "https://senxo.nl/wt/books/Algorithms.webp"
    },
    { titel: "Clean Code",
      auteur: "Robert C. Martin",
      aantalExemplaren: 3,
      afbeeldingURL: "https://senxo.nl/wt/books/CleanCode.jpg"
    },
    {
      titel: "Design Patterns: Elements of Reusable Object-Oriented Software",
      auteur: "Erich Gamma",
      aantalExemplaren: 4,
      afbeeldingURL: "https://senxo.nl/wt/books/DesignPatterns.jpg"
    },
    {
      titel: "The Pragmatic Programmer",
      auteur: "Andy Hunt",
      aantalExemplaren: 6,
      afbeeldingURL: "https://senxo.nl/wt/books/PragmaticProgrammer.jpg"
    },
    {
      titel: "Refactoring: Improving the Design of Existing Code",
      auteur: "Martin Fowler",
      aantalExemplaren: 2,
      afbeeldingURL: "https://senxo.nl/wt/books/Refactoring.jpg"
    },
    {
      titel: "Artificial Intelligence: A Modern Approach",
      auteur: "Stuart Russell",
      aantalExemplaren: 5,
      afbeeldingURL: "https://senxo.nl/wt/books/AI.jpg"
    },
    {
      titel: "You Don't Know JS: Scope & Closures",
      auteur: "Kyle Simpson",
      aantalExemplaren: 3,
      afbeeldingURL: "https://senxo.nl/wt/books/JSScope.jpg"
    },
    {
      titel: "Effective Java",
      auteur: "Joshua Bloch",
      aantalExemplaren: 4,
      afbeeldingURL: "https://senxo.nl/wt/books/EffectiveJava.jpg"
    },
    {
      titel: "Eloquent JavaScript",
      auteur: "Marijn Haverbeke",
      aantalExemplaren: 3,
      afbeeldingURL: "https://senxo.nl/wt/books/EloquentJavaScript.jpg"
    },
    {
      titel: "The Mythical Man-Month: Essays on Software Engineering",
      auteur: "Frederick P. Brooks Jr.",
      aantalExemplaren: 2,
      afbeeldingURL: "https://senxo.nl/wt/books/MythicalMan-Month.jpg"
    },
    {
      titel: "Code Complete",
      auteur: "Steve McConnell",
      aantalExemplaren: 5,
      afbeeldingURL: "https://senxo.nl/wt/books/CodeComplete.jpg"
    },
    {
      titel: "Structure and Interpretation of Computer Programs",
      auteur: "Harold Abelson",
      aantalExemplaren: 4,
      afbeeldingURL: "https://senxo.nl/wt/books/SICP.jpg"
    },
    {
      titel: "We are legion (we are bob)",
      auteur: "Dennis E. Taylor",
      aantalExemplaren: 40,
      afbeeldingURL: "https://senxo.nl/wt/books/bob.jpg"
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}