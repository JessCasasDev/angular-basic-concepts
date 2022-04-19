import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Wizard } from 'src/app/services/another-service';
import { MyService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss'],
})
export class WizardsComponent {
  constructor(private myService: MyService) {}

  wizards$: Observable<Wizard[]> = this.myService.getWizards();
}
