import { Component, OnInit } from '@angular/core';
import { GetForecastsService } from '../services/get-forecasts.service';
import { Favorite } from '../models/Favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public myFavorites: any[];
  public allFavoritesCityNames: any[];
  public favorite: any[];
  public allFavorite=[];
  public num:number=2;
  public isArray = false;

  constructor(public forecastsService: GetForecastsService) { }

  ngOnInit() {
    console.log("console.log(localStorage.getItem('favoritesArrayCityAndKey')) = ", localStorage.getItem('favoritesArrayCityAndKey'));
    if (localStorage.getItem('favoritesArrayCityAndKey')) {
      this.myFavorites = JSON.parse(localStorage.getItem('favoritesArrayCityAndKey'));
    }
    this.setFavortesArray();
  }
  public setFavortesArray() {
    
    console.log("console.log(this.myFavorites) = ", this.myFavorites);

    if (localStorage.getItem('favoritesArrayCityAndKey')) {

      for (let f of this.myFavorites) {
        console.log("console.log(f[1]) = ", f[1]);
        console.log("console.log(f[0]) = ", f[0]);
        // console.log("console.log(f.cityName) = ", f.cityName);
        this.forecastsService.getcurrentconditions(f[0]).subscribe((results) => {
          this.allFavorite.push([f[1],results]); });
        // this.num =  this.num + 1;
        
      }
      console.log("console.log(this.allFavorite) = ",  this.allFavorite);
    }
    // if (localStorage.getItem('allFavoritesCityNames')) {
    //   for (let a of this.allFavoritesCityNames) {
    //     console.log("console.log(a) = ", a);
    //     this.allFavoritesCityNames.push(a);
    //   }
    // }

  }
  public switch(){
    this.isArray = !this.isArray;
  }
}
