import { Component, OnInit } from '@angular/core';
import { GetForecastsService } from '../services/get-forecasts.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public myFavorites: any[];
  public favorite: any[];
  public allFavorite=[];

  constructor(public forecastsService: GetForecastsService) { }

  ngOnInit() {
    console.log("console.log(localStorage.getItem('allFavorites')) = ", localStorage.getItem('allFavorites'));
    if (localStorage.getItem('allFavorites')) {
      this.myFavorites = JSON.parse(localStorage.getItem('allFavorites'));
    }
    this.setFavortesArray();
  }
  public setFavortesArray() {
    if (localStorage.getItem('allFavorites')) {
      for (let f of this.myFavorites) {
        console.log("console.log(f) = ", f);
        this.forecastsService.getcurrentconditions(f).subscribe((results) => {
          this.favorite = results;
          this.allFavorite.push(results);
          console.log("console.log(this.favorite) = ",  this.favorite);
          console.log("console.log(this.allFavorite) = ",  this.allFavorite);
        });
      }
    }
  }
}
