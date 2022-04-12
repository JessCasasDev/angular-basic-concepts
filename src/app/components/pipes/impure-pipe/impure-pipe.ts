import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../pipes.component';

@Pipe({ name: 'filterActiveImpure', pure: false })
export class FilterPipeImpure implements PipeTransform {
  transform(items: Item[], props: any) {
    console.log('entering Pipe', props);

    return items.filter((item) => item.active);
  }
}
