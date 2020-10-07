import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApplication';
  query;

  temperatureC = " ";

  constructor(private http: HttpClient){
  }


  onButtonClick(){
    this.fetchWeather();
  }


  private fetchWeather(){
    this.http.get('http://api.weatherapi.com/v1/current.json?key=8754dac490974be49e5165854200710&q='+this.query)
        .subscribe(response => {
           let json = JSON.parse(JSON.stringify(response))
          console.log(json['current']['temp_c'])

          this.temperatureC = json['current']['temp_c'] + "C degrees";
        }
      );

  }



}
