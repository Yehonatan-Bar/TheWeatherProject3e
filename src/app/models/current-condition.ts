export class Currentcondition{
    
    WeatherText : string;
    WeatherIcon : number;
   
    IsDayTime : boolean;
    Link : string;
    Temperature :  [{
        Metric: {Value :number,Unit : string, UnitType : number},
        Imperial: {Value : number,Unit : string,UnitType : number}
    }]
    
}
