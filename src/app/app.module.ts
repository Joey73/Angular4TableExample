import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import {AgGridModule} from "ag-grid-angular/main";

import { AppComponent } from './app.component';
import { AddressService } from "app/services/address.service";
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { AppRoutingModule } from "app/app-routing.module";
import { TableOverviewComponent } from './tables/table-overview/table-overview.component';
import { FormattedTableComponent } from './tables/formatted-table/formatted-table.component';
import { AgGridTableBasicComponent } from './tables/ag-grid/ag-grid-table-basic/ag-grid-table-basic.component';
import { RedComponent } from './tables/ag-grid/red/red.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    TableOverviewComponent,
    FormattedTableComponent,
    AgGridTableBasicComponent,
    RedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgGridModule.withComponents([])
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
