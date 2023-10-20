import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationPageComponent } from './location-page/location-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DescriptionPageComponent } from './description-page/description-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    ImageCarouselComponent,
    LocationPageComponent,
    ServicesPageComponent,
    PortfolioPageComponent,
    DescriptionPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCarouselModule,
    NgbModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
