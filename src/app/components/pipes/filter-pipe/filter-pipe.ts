import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../pipes.component';

@Pipe({ name: 'filterActive' })
export class FilterPipe implements PipeTransform {
  transform(items: Item[], props: any) {
    console.log('entering Pipe', props);

    return items.filter((item) => item.active);
  } 
}
