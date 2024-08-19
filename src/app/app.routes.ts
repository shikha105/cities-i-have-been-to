import { Routes } from '@angular/router';
import { CreateCityComponent } from './components/create-city/create-city.component';
import { HomeComponent } from './components/home/home.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'create-city', component: CreateCityComponent },
  { path: '', component: HomeComponent },
  { path: 'city/:id', component: CityDetailComponent },
  { path: 'about', component: AboutComponent },
];
