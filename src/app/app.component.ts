import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateCityComponent } from './components/create-city/create-city.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CreateCityComponent,
    NavbarComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'cities-i-have-been-to';
}
