import { Component } from '@angular/core';
import { PortfoEntry } from '../Entries/portfolio-interface';
import portEntries from '../Entries/portentries.json'

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent {

  public entryList: PortfoEntry[];
  private importList = portEntries;

  constructor() {
    this.entryList = [];
    for (let i=0; i < this.importList.length; i++) {
      this.entryList[i] = this.importList[i];
    }
  }

}
