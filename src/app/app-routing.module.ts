import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { InfoComponent } from "app/info/info.component"
import { TableOverviewComponent } from "app/tables/table-overview/table-overview.component";
import { BasicTableComponent } from "app/tables/basic-table/basic-table.component";
import { FormattedTableComponent } from "app/tables/formatted-table/formatted-table.component";
import { AgGridTableBasicMarkupComponent } from "app/tables/ag-grid/ag-grid-table-basic-markup/ag-grid-table-basic-markup.component";
import { AgGridTableBasicProgrammaticComponent } from "app/tables/ag-grid/ag-grid-table-basic-programmatic/ag-grid-table-basic-programmatic.component";

const appRoutes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'formatted-table', component: FormattedTableComponent },
  { path: 'ag-grid-basic-table-markup', component: AgGridTableBasicMarkupComponent },
  { path: 'ag-grid-basic-table-programmatic', component: AgGridTableBasicProgrammaticComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
