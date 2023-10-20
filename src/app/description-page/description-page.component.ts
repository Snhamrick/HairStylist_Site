import { Component, OnChanges, OnDestroy } from '@angular/core';
import { ServiceEntry } from '../Entries/service-interface';
import { DescriptionService } from '../Services/description.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-description-page',
  templateUrl: './description-page.component.html',
  styleUrls: ['./description-page.component.css']
})
export class DescriptionPageComponent implements OnDestroy {

  public currentService: ServiceEntry;
  public descriptionSub: Subscription = new Subscription();

  constructor (private descriptionService: DescriptionService) {
    this.currentService = {
      name: '',
      price: '',
      description: ''
    };
    this.descriptionSub = this.descriptionService.currentService.subscribe(service => this.currentService = service);
  }

  ngOnDestroy(): void {
    this.descriptionSub.unsubscribe();
  }


}
