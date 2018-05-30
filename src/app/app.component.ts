import { Component } from '@angular/core';

import {AppService} from "./app.service";

@Component({
  selector: 'body',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _appService: AppService){
    
    document.body.style.background = "url('assets/wallpaper.jpg')";
     
  }
 
}
