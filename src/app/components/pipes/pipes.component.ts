import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
  active: boolean;
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  date = new Date();
  active = true;
  items: Item[] = [
    { name: 'Angular', active: true },
    { name: 'React', active: false },
    { name: 'Vue', active: true },
  ];

  displayActive(item: Item) {
    console.log('entering method inside Pipes Component');
    return item.active;
  }

  addItem() {
    this.active = !this.active;
   /*  this.items.push({ name: 'otro', active: true }); */
    this.items = [...this.items, { name: 'Otro', active: this.active }];
  }
}
