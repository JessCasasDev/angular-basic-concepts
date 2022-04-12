import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MyService } from 'src/app/services/my-service.service';

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
    ],
    lastName: [
      '',
      [Validators.minLength(5), Validators.maxLength(15), Validators.required],
      [],
    ],
    email: ['', Validators.email],
    address: this.formBuilder.group({
      street: '',
      city: '',
    }),
  });

  get email() {
    return this.formulario.controls.email;
  }

  ngOnInit(): void {
    this.formulario.valueChanges.subscribe((form) =>
      console.log(this.formulario)
    );
  }

  submit() {
    console.log(this.formulario.value);
    this.myService.addWizard(this.formulario.value);
  }
}
