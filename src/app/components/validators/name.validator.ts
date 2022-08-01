import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { timer } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { Wizard } from 'src/app/services/another-service';
import { MyService } from 'src/app/services/my-service.service';

export class NameValidator {
  static createValidator(service: MyService): AsyncValidatorFn {
    return (control: AbstractControl) => {
      return service.getWizards().pipe(
        delay(1000),
        map((wizards: Wizard[]) => {
          return wizards.map((wizard) => wizard.name).includes(control.value)
            ? { nameAlreadyExists: true }
            : null;
        })
      );
    };
  }
}
