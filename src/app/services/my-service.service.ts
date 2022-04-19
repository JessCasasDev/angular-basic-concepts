import { Injectable } from '@angular/core';
import { AnotherService, Wizard } from './another-service';


@Injectable({
  providedIn: 'root',
})
export class MyService {
 
  constructor(private anotherService: AnotherService) {}

  getWizards() {
    return this.anotherService.getWizards();
  }

  addWizard(wizard: Wizard) {
    this.anotherService.sendWizard(wizard);
  }
}
