import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid/main";
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-ag-grid-table-basic-programmatic',
  templateUrl: './ag-grid-table-basic-programmatic.component.html',
  styleUrls: ['./ag-grid-table-basic-programmatic.component.css']
})
export class AgGridTableBasicProgrammaticComponent implements OnInit {
  gridOptions: GridOptions;
  rowData: any[];

  constructor(private addressService: AddressService) {
    this.gridOptions = <GridOptions>{};
    this.gridOptions.columnDefs = this.createColumnDefs();
    this.gridOptions.enableColResize = true;
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableFilter = true;
    this.gridOptions.rowHeight = 22;
    this.gridOptions.rowSelection = "multiple";

    // Set directly in the html file because it is not available yet
    //this.gridOptions.rowData = this.rowData;
  }

  ngOnInit() {
    this.addressService.getAllDummyAddresses()
      .subscribe(
        data => this.rowData = data,
        (error) => console.log(error)
      );
  }

  createColumnDefs(){
    return [
      {
          headerName: "Name",
          field: "name",
          width: 180
      },
      {
          headerName: "Username",
          field: "username",
          width: 130
      },
      {
          headerName: "Email",
          field: "email",
          width: 200
      },
      {
          headerName: "Street",
          field: "address.street",
          width: 130
      },
      {
          headerName: "Suite",
          field: "address.suite",
          width: 80
      },
      {
          headerName: "City",
          field: "address.city",
          width: 120
      },
      {
          headerName: "ZIP",
          field: "address.zipcode",
          width: 100
      },
      {
          headerName: "Phone",
          field: "phone",
          width: 160
      },
      {
          headerName: "Website",
          field: "website",
          width: 100
      },
    ];
  }
}