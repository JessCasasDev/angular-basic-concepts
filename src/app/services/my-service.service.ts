import { Injectable } from '@angular/core';
import { AnotherService } from './another-service';

export interface Wizard {
  name: string;
  lastName: string;
  house: 'Gryffindor' | 'Hufflepuff' | 'Ravenclaw ' | 'Slytherin';
  email: string;
  address: {
    city: string;
    street: string;
  };
}
@Injectable({
  providedIn: 'root',
})
export class MyService {
 
  constructor(private anotherService: AnotherService) {}

  getWizards() {
    return this.anotherService.wizardsList;
  }

  addWizard(wizard: Wizard) {
    this.anotherService.sendWizard(wizard);
  }
}
