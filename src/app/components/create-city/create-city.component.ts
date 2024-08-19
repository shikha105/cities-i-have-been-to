import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT } from '../../../constants';
@Component({
  selector: 'app-create-city',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-city.component.html',
  styleUrl: './create-city.component.css',
})
export class CreateCityComponent {
  citySavedMessage: string = '';
  cities: any[] = [];
  constructor(private http: HttpClient) {}
  cityId = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required]);
  dateOfVisit = new FormControl('', [Validators.required]);
  firstImpression = new FormControl('', [Validators.required]);
  thingsIDid = new FormControl('', [Validators.required]);
  bestActivity = new FormControl('', [Validators.required]);
  overallComment = new FormControl('', [Validators.required]);

  addCityForm = new FormGroup({
    cityId: this.cityId,
    name: this.name,
    dateOfVisit: this.dateOfVisit,
    firstImpression: this.firstImpression,
    thingsIDid: this.thingsIDid,
    bestActivity: this.bestActivity,
    overallComment: this.overallComment,
  });

  generateUniqueId(): string {
    return Date.now().toString();
  }

  onSaveCity() {
    const inputData = this.addCityForm.value;

    this.http.post(API_ENDPOINT, inputData).subscribe(
      (response) => {
        this.citySavedMessage = 'City Data Saved!';
        alert('Successfully created the city.');
        this.addCityForm.reset();
      },
      (error) => {
        alert('Error saving city data.');
      }
    );
  }
}
