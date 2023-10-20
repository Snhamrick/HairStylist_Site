import { Component} from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class ImageCarouselComponent {

  constructor(config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  images = [
    {name: 'portfolio1.jpg'},
    {name: 'portfolio2.jpg'},
    {name: 'portfolio3.jpg'},
    {name: 'portfolio4.jpg'},
    {name: 'portfolio5.jpg'},
    {name: 'portfolio6.jpg'},
    {name: 'portfolio7.jpg'},
    {name: 'portfolio8.jpg'},
    {name: 'portfolio9.jpg'},
  ]
}