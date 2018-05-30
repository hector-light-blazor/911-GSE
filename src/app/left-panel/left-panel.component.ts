import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  

  constructor(private _appService:AppService) { }

  ngOnInit() {
    

  }

  changeLayer(number:number){
    
    this._appService.controlMap(number)
  }

}
