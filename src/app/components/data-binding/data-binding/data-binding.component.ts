import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  textoInterpolacion = 'Interpolacion';
  url =
    'https://lh3.googleusercontent.com/9PIUsClrLHDgUriw1keU_74EHWjCSBv5Phu21Wsp41FxdIR8nuJFUHSKA8eL5Uo96Pu-u79HLTsEYWe_xByvfNzSnQ=w128-h128-e365-rj-sc0x00ffffff';
  disabled = true;

  text = 'Hola';

  constructor(private cd: ChangeDetectorRef) {}

  method() {
    this.disabled = !this.disabled;
    console.log('logging info');
  }
}
