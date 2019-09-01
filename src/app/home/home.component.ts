import { Component, OnInit } from '@angular/core';
// import { Country } from '../models/country';
import { GetForecastsService } from '../services/get-forecasts.service';
// import { FiveDayWeatherModel } from '../models/five-days-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public searchContent: any;
  public forcast: any; 
  // public fiveDaysWeather: FiveDayWeatherModel[];
  // public forcast: any = { fiveDaysWeather: [] }
  public arrayList: Array<string>;
  citiesFromSearch = [];
  locationKey:string="215854";
  cityName:string = "Tel Aviv";
  public name:string;
  public allFavorites:string[];
  public favorite:string;
  
  constructor(public forecastsService: GetForecastsService) { }

  ngOnInit() {
    this.getFiveDayForecastsForNg();
  }


  public searchForecasts(cityName: string) {
    this.forecastsService.getCityAutocomplete(cityName).subscribe((results) => {
      this.citiesFromSearch = results;
    });

  }

  
  
  public getFiveDayForecasts(cityName:any) {
    this.cityName = cityName.LocalizedName;
    this.locationKey = cityName.Key;
    this.citiesFromSearch = [];
    this.forecastsService.getFiveDayWeather(this.locationKey).subscribe((res) => {
      this.forcast = res;
      console.log("console.log(this.forcast) = ", this.forcast);
      console.log("console.log(this.cityName) = ", this.cityName);
    }, (error) => {
      alert("forecast not found")
    })
  }
  public getFiveDayForecastsForNg() {
    this.forecastsService.getFiveDayWeather(this.locationKey).subscribe((res) => {
      this.forcast = res;
      console.log("console.log(this.forcast) = ", this.forcast);
    }, (error) => {
      alert("forecast not found")
    })
  }
  
  public favoriteMe() {
      
    if(!localStorage.getItem('allFavorites')){
      this.allFavorites = [];
      this.allFavorites.push(this.locationKey);
     localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
    }
    else{
      this.allFavorites = JSON.parse(localStorage.getItem('allFavorites'));
      this.allFavorites.push(this.locationKey);
      localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
    }
  }
    

    // this.searchContent = f.name;
    // localStorage.setItem('favorite', JSON.stringify(this.searchContent));
    // this.name = JSON.stringify(this.searchContent);
    // console.log("console.log(this.name) = ", this.name);
  
  
  
}

