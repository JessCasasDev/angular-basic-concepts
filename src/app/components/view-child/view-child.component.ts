import {
  AfterViewInit,
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AnotherChildComponent } from './another-child/another-child.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss'],
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  items = [1, 2, 3, 4, 5, 6, 7];

  displayAnotherChild = false;

  @ViewChildren(ChildComponent) childs!: QueryList<ChildComponent>;
  @ViewChild(AnotherChildComponent) child!: AnotherChildComponent;
  @ViewChild('thisElement') element: any;

  ngOnInit(): void {
    console.log(this.child);
  }

  // Solo aqui se puede llamar el ViewChildren/ViewChild
  ngAfterViewInit() {
    this.childs.changes.subscribe((element) => {
      // element.enviarMensajeAlPadre();
      console.log(element.first.otroMetodo());
      console.log(element.first.item?.displayMessage());
    });

    console.log(this.child);
    this.child.displayMessage();
    console.log(this.element);
  }

  setDisplayAnotherChild() {
    this.displayAnotherChild = !this.displayAnotherChild;
  }

  setItemsOutput(array: Array<number>, child: string) {
    console.log(array, child);
  }
}
