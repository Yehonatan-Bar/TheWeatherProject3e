export class Currentcondition{
    LocalObservationDateTime : string;
    EpochTime : number;
    WeatherText : string;
    WeatherIcon : number;
    HasPrecipitation : boolean;
    PrecipitationType : string;
    IsDayTime : boolean;
    MobileLink : string;
    Link : string;
    Temperature :  [{
        Metric: {Value :number,Unit : string, UnitType : number},
        Imperial: {Value : number,Unit : string,UnitType : number}
    }]
}
