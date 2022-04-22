import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      minWidth: '46.875rem',
      height: '65%',
      disableClose: true,
      id:'myOwnId',
      panelClass: 'modal-component'
    });

    return dialogRef.componentInstance.agreed$;
  }

}
