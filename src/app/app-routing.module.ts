import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { TableOverviewComponent } from "app/tables/table-overview/table-overview.component";
import { BasicTableComponent } from "app/tables/basic-table/basic-table.component";
import { FormattedTableComponent } from "app/tables/formatted-table/formatted-table.component";
import { AgGridTableBasicComponent } from "app/tables/ag-grid/ag-grid-table-basic/ag-grid-table-basic.component";

const appRoutes: Routes = [
  { path: '', component: TableOverviewComponent },
  { path: 'basic-table', component: BasicTableComponent },
  { path: 'formatted-table', component: FormattedTableComponent },
  { path: 'ag-grid-basic-table', component: AgGridTableBasicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
