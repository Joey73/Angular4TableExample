import { Component, OnInit } from '@angular/core';
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-formatted-table',
  templateUrl: './formatted-table.component.html',
  styleUrls: ['./formatted-table.component.css']
})
export class FormattedTableComponent implements OnInit {
  addresses = [];
  
  constructor(private addressService: AddressService) { }

  ngOnInit() {
    this.addressService.getAllDummyAddresses()
      .subscribe(
        (addresses: any[]) => this.addresses = addresses,
        (error) => console.log(error)
      );
  }
}
