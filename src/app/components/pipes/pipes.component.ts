import { Component } from '@angular/core';
import { FilterPipe } from './filter-pipe/filter-pipe';

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

  constructor(private pipe: FilterPipe) {}

  displayActive(item: Item) {
    console.log('entering method inside Pipes Component');
    //return item.active;
    return this.pipe.transform(this.items, 'item');
  }

  addItem() {
    this.active = !this.active;
    /* this.items.push({ name: 'otro', active: true }); */
    this.items = [...this.items, { name: 'Otro', active: this.active }];
  }
}
