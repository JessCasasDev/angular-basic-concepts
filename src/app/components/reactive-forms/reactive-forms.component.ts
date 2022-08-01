import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of, timer } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { MyService } from 'src/app/services/my-service.service';
import { NameValidator } from '../validators/name.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private myService: MyService) {}

  formulario = this.formBuilder.group({
    name: [
      '',
      [Validators.minLength(5), Validators.maxLength(15), Validators.required],
      [NameValidator.createValidator(this.myService)],
    ],
    lastName: [
      '',
      [Validators.minLength(5), Validators.maxLength(15), Validators.required],
    ],
    email: ['email@email.com', Validators.email],
    address: this.formBuilder.group({
      street: '',
      city: '',
      zip: ['', [Validators.minLength(1)], [this.validateZip]],
    }),
  });

  get email() {
    return this.formulario.controls.email;
  }

  get zip() {
    return (this.formulario.controls.address as FormGroup).controls.zip;
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe((form) =>
      console.log(this.formulario, form)
    );

    this.formulario.controls.name.valueChanges.subscribe((name) => {
      if (name === 'Hola') {
        this.email.addValidators(Validators.required);
      } else {
        this.email.removeValidators(Validators.required);
      }
    });
  }

  submit(event: any) {
    event.preventDefault();
    console.log(this.formulario.value);
    this.myService.addWizard(this.formulario.value);
  }

  validateZip(control: AbstractControl) {
    const value: string = control.value;

    return timer(100).pipe(
      switchMap(() => ReactiveFormsComponent.fakeHttp(value)),
      map((exists: boolean) => {
        return !exists
          ? { invalidZip: { validValues: ['1', '2', '3', '4'] } }
          : null;
      })
    );
  }

  static fakeHttp(value: string) {
    let validZipcodes = ['1', '2', '3', '4'];
    return of(validZipcodes.includes(value)).pipe(delay(3000));
  }
}
