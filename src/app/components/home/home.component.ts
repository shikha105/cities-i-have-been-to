import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { API_ENDPOINT } from '../../../constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  cities: any[] = [];

  ngOnInit() {
    this.http.get(API_ENDPOINT).subscribe(
      (response: any) => {
        this.cities = response;
      },
      (error) => {
        alert('Error retrieving city data.');
      }
    );
  }
}
