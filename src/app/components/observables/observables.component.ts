import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, of, Subject, Subscription, throwError } from 'rxjs';
import { catchError, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnDestroy {
  numero = 1;
  displayNumero = 0;
  observable$ = new Subject<number>();
  unsubscribe$ = new Subject<number>();

  obs2$: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.observable$.unsubscribe();
    this.obs2$.unsubscribe();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  /* ngOnInit() {
    this.observable$.subscribe();
  } */

  next() {
    this.observable$.next(this.numero++);
  }

  subscribe() {
    this.obs2$ = this.observable$
      .pipe(
        takeUntil(this.unsubscribe$),
        map((numero) => numero * 2),
        catchError((error) => {
          console.log(error);
          return throwError(error);
        })
      )
      .subscribe(
        (numero) => (this.displayNumero = numero),
        (error) => {
          console.log(error);
        }
      );

    console.log(this.observable$.observers);
  }

  complete() {
    this.observable$.complete();
  }
}
