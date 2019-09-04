import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FiveDayWeatherModel } from '../models/five-days-model';
import { Observable } from 'rxjs';
import { Autocomplete } from '../models/autocomplete';

@Injectable({
  providedIn: 'root'
})
export class GetForecastsService {
  //yonzb.ar "AFgcDyBc9UbUOq8DlkGnywLCG8JGu1ZM";
  apiKey:string = "AFgcDyBc9UbUOq8DlkGnywLCG8JGu1ZM";
  // yonzbar "vcmhLBfAVywAiMZecakjulylOo4CHPAp";
  //y.onzbar: "dpR4W7jXGWtNAQDEQ91UfJAt0QJ9alQ8"

  constructor(
    public http: HttpClient
  ) { }

    public getFiveDayWeather(locationKey:string):Observable<any> {
    return this.http.get<Object>
    (`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey}`);
  }
  //   public getFiveDayWeather2(locationKey:string):Observable<any> {
  //   return this.http.get<Object>
  //   (`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${this.apiKey2}`);
  // }

  getCityAutocomplete(searchValue: string): Observable<Autocomplete[]> {
    return this.http.get<Autocomplete[]>("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+this.apiKey+"&language=en-us" + '&q=' + searchValue);
  }
  // http://dataservice.accuweather.com/locations/v1/cities/autocomplete

  getcurrentconditions(locationKey): Observable<any> {
    return this.http.get<Object>(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${this.apiKey}`);
  }
  }