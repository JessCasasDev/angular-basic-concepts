import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalComponent>) {}

  agreed$ = new Subject<boolean>();
  //
  subject = new Subject<number>();
  behaviorsubject = new BehaviorSubject<number>(0);
  replaysubject = new ReplaySubject<number>();

  s: any;
  b: any;
  r: any;
  ngOnInit(): void {}
  valor = 1;
  close() {
    this.agreed$.next(true);
    this.closeModal();
  }

  subcription() {
    this.subject.asObservable().subscribe((value) => (this.s = value));
    this.behaviorsubject.asObservable().subscribe((value) => (this.b = value));
    this.replaysubject
      .asObservable()
      .subscribe((value) => ((this.r = value), console.log(value)));
  }

  next() {
    this.valor++;
    this.subject.next(this.valor);
    this.behaviorsubject.next(this.valor);
    this.replaysubject.next(this.valor);
  }

  stay() {
    this.agreed$.next(false);
    this.closeModal();
  }

  private closeModal() {
    this.dialogRef.close();
  }
}
