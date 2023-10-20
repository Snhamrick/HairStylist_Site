import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ServiceEntry } from '../Entries/service-interface';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  private source = new BehaviorSubject<ServiceEntry>({
    name: '',
    price: '',
    description: ''
  });
  currentService = this.source.asObservable();

  constructor() { }

  changeService(service: ServiceEntry) {
    this.source.next(service);
  }
}
