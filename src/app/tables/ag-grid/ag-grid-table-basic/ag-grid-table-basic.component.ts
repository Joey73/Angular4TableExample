import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import { RedComponent } from "../red/red.component";
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-ag-grid-table-basic',
  templateUrl: './ag-grid-table-basic.component.html',
  styleUrls: ['./ag-grid-table-basic.component.css']
})
export class AgGridTableBasicComponent implements OnInit {
  gridOptions: GridOptions;
  addresses = [];

  constructor(private addressService: AddressService) {
    this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "ID",
                field: "id",
                width: 100
            },
            {
                headerName: "Value",
                field: "value",
                width: 100
            },

        ];

        this.gridOptions.rowData = this.getRowData();
        //let configOptions: string[];
        //configOptions.push(JSON.stringify(this.getAllAddressData()));
        //this.gridOptions.api.setRowData(configOptions);
  }

  ngOnInit() {
  }

  getRowData(){
      let rowData: any[];
      rowData = [
        {id: 5, value: 10},
        {id: 10, value: 15},
        {id: 15, value: 20}
    ];
    console.log(rowData);
    return rowData;
  }

  getAllAddressData(){
    let addressesRowData: any[];

    this.addressService.getAllDummyAddresses()
      .subscribe(
        (addresses: any[]) => addressesRowData = addresses,
        (error) => console.log(error)
      );
    console.log(addressesRowData[0]);

    return addressesRowData;
  }
}
