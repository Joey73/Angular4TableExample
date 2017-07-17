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
    this.gridOptions.enableColResize = true;
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableFilter = true;
    this.gridOptions.rowHeight = 22;
    this.gridOptions.rowSelection = "single"; // or multiple

    this.addressService.getAllDummyAddresses().subscribe(
        data => {
            this.gridOptions.api.setColumnDefs(this.createColumnDefs()); 
            this.gridOptions.api.setRowData(data);
            this.gridOptions.enableColResize = true;
            this.gridOptions.api.refreshView();
        },
        (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

  onRowClicked(event: any) {
      console.log('Row clicked. Data: ', event.data);
  }

  onCellClicked(event: any) {
      console.log('Cell clicked. Data: ', event.data);
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