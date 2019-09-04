import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { Country } from '../models/country';
import { GetForecastsService } from '../services/get-forecasts.service';
import { Favorite } from '../models/Favorite';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  locationKey: string = "215854";
  cityName: string = "Tel Aviv";
  public name: string;
  public allFavorites: string[];
  public allFavoritesCityNames: string[];
  public favorite: string;
  public favorites = new Favorite(this.locationKey, this.cityName);
  public favoritesArrayCityAndKey: any[][];
  public SomthingToFill: string[];
  public isCelsius: boolean = false;


  constructor(public forecastsService: GetForecastsService) { }
  ngOnInit() {
    this.getFiveDayForecastsForNg();
    this.SomthingToFill = ["fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill", "fill"];
    console.log("console.log(this.SomthingToFill) = ", this.SomthingToFill);
    this.isCelsius = false;
    localStorage.setItem('isCelsius', JSON.stringify(this.isCelsius));
    
  }
  
  
  
  public isCelsiusMethod() {
    this.isCelsius = !this.isCelsius;
    console.log("console.log(this.isCelsius) = ", this.isCelsius);
    localStorage.setItem('isCelsius', JSON.stringify(this.isCelsius));
    console.log("console.log(JSON.parse(localStorage.getItem('isCelsius'))) = ", JSON.parse(localStorage.getItem('isCelsius')));
    

  }





  public searchForecasts(cityName: string) {
    this.forecastsService.getCityAutocomplete(cityName).subscribe((results) => {
      this.citiesFromSearch = results;
    });

  }



  public getFiveDayForecasts(cityName: any) {
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

  //C=(F-32)/1.8


  public favoriteMe() {
    if (!localStorage.getItem('allFavorites')) {
      this.favoritesArrayCityAndKey = [], [];
      this.favoritesArrayCityAndKey.push([this.locationKey, this.cityName]);
      localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
      localStorage.setItem('allFavoritesCityNames', JSON.stringify(this.allFavoritesCityNames));
      localStorage.setItem('favoritesArrayCityAndKey', JSON.stringify(this.favoritesArrayCityAndKey));
    }
    else {
      // this.allFavorites = JSON.parse(localStorage.getItem('allFavorites'));
      this.favoritesArrayCityAndKey = JSON.parse(localStorage.getItem('favoritesArrayCityAndKey'));
      // console.log("this.allFavorites = ", this.allFavorites);
      // this.allFavorites.push(this.locationKey);
      // this.allFavoritesCityNames.push(this.cityName);
      this.favoritesArrayCityAndKey.push([this.locationKey, this.cityName]);
      // localStorage.setItem('allFavorites', JSON.stringify(this.allFavorites));
      // localStorage.setItem('allFavoritesCityNames', JSON.stringify(this.allFavoritesCityNames));
      localStorage.setItem('favoritesArrayCityAndKey', JSON.stringify(this.favoritesArrayCityAndKey));

    }
  }


  // this.searchContent = f.name;
  // localStorage.setItem('favorite', JSON.stringify(this.searchContent));
  // this.name = JSON.stringify(this.searchContent);
  // console.log("console.log(this.name) = ", this.name);



}

