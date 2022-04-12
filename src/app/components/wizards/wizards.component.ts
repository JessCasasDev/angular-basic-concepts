import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnotherService } from 'src/app/services/another-service';
import { MyService, Wizard } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-wizards',
  templateUrl: './wizards.component.html',
  styleUrls: ['./wizards.component.scss'],
})
export class WizardsComponent {
  constructor(private anotherService: AnotherService) {}
  
  wizards$: Observable<Wizard[]> = this.anotherService.getWizards();
}
