import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  fromEvent,
  of,
  ReplaySubject,
  Subject,
  Subscription,
  throwError,
} from 'rxjs';
import {
  catchError,
  filter,
  first,
  map,
  take,
  takeUntil,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss'],
})
export class ObservablesComponent implements OnDestroy {
  numero = 1;
  displayNumero = 0;
  observable$ = new BehaviorSubject<number>(2);
  unsubscribe$ = new Subject<number>();

  obs2$: Subscription = new Subscription();

  ngOnDestroy(): void {
    this.observable$.unsubscribe();
    this.obs2$.unsubscribe();

    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit() {
    this.observable$.subscribe((value) => {
      console.log('Me actualice porqu estoy escuchando', value);
      //    this.displayNumero = value;
    });

    const subject = new Subject();
    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.subscribe((x) => console.log(x));

    const bsubject = new BehaviorSubject(1);
    bsubject.next(1);
    bsubject.next(2);
    bsubject.next(3);
    bsubject.subscribe(x => console.log(x));
  
    const rsubject = new ReplaySubject(3);
    rsubject.next(1);
    rsubject.next(2);
    rsubject.next(3);
    rsubject.subscribe(x => console.log(x));
  }

  next() {
    this.observable$.next(this.numero++);
  }

  subscribe() {
    this.obs2$ = this.observable$
      .pipe(
        take(1),
        takeUntil(this.unsubscribe$),
        catchError((error) => {
          console.log(error);
          return throwError(error);
          //return EMPTY;
        }),
        tap(console.log),
        filter((value) => value % 2 === 1),
        map((numero) => numero * 2)
      )
      .subscribe(
        (numero) => (this.displayNumero = numero),
        (error) => {
          console.log(error);
        }
      );

    console.log(this.observable$.observers);
  }

  error() {
    this.observable$.error('Ups');
  }

  complete() {
    this.observable$.complete();
  }
}
