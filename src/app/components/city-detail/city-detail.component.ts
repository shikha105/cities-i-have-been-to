import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { API_ENDPOINT } from '../../../constants';

@Component({
  selector: 'app-city-detail',
  standalone: true,
  imports: [],
  templateUrl: './city-detail.component.html',
  styleUrl: './city-detail.component.css',
})
export class CityDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  cities: any[] = [];
  city = {
    cityId: '',
    name: '',
    dateOfVisit: '',
    firstImpression: '',
    thingsIDid: '',
    bestActivity: '',
    overallComment: '',
  };

  ngOnInit() {
    const cityId = this.route.snapshot.paramMap.get('id'); //this is to get the parameter id which sent through routes earlier using app routes ts file

    this.getCityById(cityId);
  }

  getCityById(id: any) {
    this.http.get(API_ENDPOINT).subscribe(
      (response: any) => {
        this.cities = response;
        this.city = this.cities.find((city) => city.cityId === id);
      },
      (error) => {
        alert('Error retrieving city data.');
      }
    );
  }
}
