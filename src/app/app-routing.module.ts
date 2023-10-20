import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { LocationPageComponent } from './location-page/location-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { DescriptionPageComponent } from './description-page/description-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent, pathMatch: 'full'},
  {path:'services', component: ServicesPageComponent},
  {path:'location', component: LocationPageComponent},
  {path:'portfolio', component: PortfolioPageComponent},
  {path: 'description', component: DescriptionPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
