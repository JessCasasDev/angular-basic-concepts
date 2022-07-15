import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../pipes.component';

@Pipe({ name: 'filterActive' })
export class FilterPipe implements PipeTransform {
  transform(items: Item[], props: string) {
    console.log('filterActivePure', props);

    return items.filter((item) => item.active);
  }
}
