import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AnotherChildComponent } from '../another-child/another-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() items!: Array<number>;
  @Output() itemsOutput = new EventEmitter<Array<number>>();

  @ViewChild(AnotherChildComponent) item:any;


  enviarMensajeAlPadre() {
    this.itemsOutput.emit(this.items.map((item) => item * 2));
  }

  otroMetodo() {
    console.log('Este metodo se llama en ChildComponent');
  }
}
