import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss'],
})
export class DirectivasComponent {
  displayElement = false;
  variableDentroDelTs = 'white'
  list = [
    { id: 1, name: 'Julian' },
    { id: 2, name: 'Marcos' },
  ];

  currentItem = 'bannana';

  setDisplayElement() {
    this.displayElement = !this.displayElement;
  }

  //Se usa para detectar cambios de una lista de una mejor manera
  trackItems(element: any) {
    return element.id;
  }
}
