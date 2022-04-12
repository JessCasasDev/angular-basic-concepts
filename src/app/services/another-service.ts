import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Wizard } from './my-service.service';

@Injectable({
  providedIn: 'root',
})
export class AnotherService {
  wizardsList: Wizard[] = [
    {
      name: 'Harry',
      lastName: 'Potter',
      house: 'Gryffindor',
      email: 'harryPotter@howarts.com',
      address: {
        city: 'Privet Drive',
        street: 'Number 4',
      },
    },
    {
      name: 'Ron',
      lastName: 'Weasly',
      house: 'Gryffindor',
      email: 'ronWeasly@howarts.com',
      address: {
        city: 'Ottery St. Catchpole',
        street: 'Madriguera',
      },
    },
    {
      name: 'Dracus',
      lastName: 'Malfoy',
      house: 'Slytherin',
      email: 'dracusMalfoy@howarts.com',
      address: {
        city: 'Wiltshire',
        street: 'Mansion 1',
      },
    },
  ];
  wizards = new BehaviorSubject<Wizard[]>(this.wizardsList);

  constructor() {}

  sendWizard(wizard: Wizard) {
    console.log(wizard);

    this.wizardsList = [...this.wizardsList, wizard];
    this.wizards.next(this.wizardsList);
  }

  getWizards() {
    return this.wizards.asObservable();
  }
}
