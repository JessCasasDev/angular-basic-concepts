import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
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

  // Subject()
  //next(1)
  //next(2)
  //subscribe() -> no escucha nada
  // next(3) -> escucha el 3

  // BehaviorSubject()
  //next(1)
  //next(2)
  //subscribe() -> escucha 2
  // next(3) -> escucha 3

  // ReplaySubject(3)
  //next(1)
  //next(2)
  //next(3)
  //next(4)
  //subscribe() -> escucha 2,3,4
  // next(5) -> 3,4,5

  wizards = new BehaviorSubject<Wizard[]>(this.wizardsList);

  constructor() {
    this.wizards.next(this.wizardsList);
  }
  
  sendWizard(wizard: Wizard) {
    console.log(wizard);

    this.wizardsList = [...this.wizardsList, wizard];
    this.wizards.next(this.wizardsList);
  }

  getWizards() {
    return this.wizards.asObservable();
  }
}
