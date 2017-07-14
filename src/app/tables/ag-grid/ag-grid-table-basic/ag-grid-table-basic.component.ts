import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-ag-grid-table-basic',
  templateUrl: './ag-grid-table-basic.component.html',
  styleUrls: ['./ag-grid-table-basic.component.css']
})
export class AgGridTableBasicComponent implements OnInit {
  gridOptions: GridOptions;
  rowData: any[];

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.addressService.getAllDummyAddresses()
      .subscribe(
        data => this.rowData = data,
        (error) => console.log(error)
      );
  }
}
