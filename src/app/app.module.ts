import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AddressService } from "app/services/address.service";
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { AppRoutingModule } from "app/app-routing.module";
import { TableOverviewComponent } from './tables/table-overview/table-overview.component';
import { FormattedTableComponent } from './tables/formatted-table/formatted-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicTableComponent,
    TableOverviewComponent,
    FormattedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
