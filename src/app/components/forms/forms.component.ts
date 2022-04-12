import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  //Model Driven Form
  currentItem = { name: 'Jess', age: 11 };
}
