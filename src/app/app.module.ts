import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2CompleterModule } from "ng2-completer";
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MapComponent } from './map/map.component';
import { AddressResultsComponent } from './address-results/address-results.component';
import {AppService} from "./app.service";
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { LoginComponent } from './login/login.component';
import { TableDataComponent } from './table-data/table-data.component';
import { DataTablePipe } from './data-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    MapComponent,
    AddressResultsComponent,
    RemoveSpacesPipe,
    LoginComponent,
    TableDataComponent,
    DataTablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CompleterModule,
    HttpModule
  ],
  providers: [AppService, MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
