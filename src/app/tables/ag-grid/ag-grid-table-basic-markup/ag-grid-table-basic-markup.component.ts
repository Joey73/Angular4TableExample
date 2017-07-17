import { Component, OnInit } from '@angular/core';
import {GridOptions} from "ag-grid";
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-ag-grid-table-basic-markup',
  templateUrl: './ag-grid-table-basic-markup.component.html',
  styleUrls: ['./ag-grid-table-basic-markup.component.css']
})
export class AgGridTableBasicMarkupComponent implements OnInit {
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
  
  onRowClicked(event: any) {
      console.log('Row clicked. Data: ', event.data);
  }

  onCellClicked(event: any) {
      console.log('Cell clicked. Data: ', event.data);
  }
}
