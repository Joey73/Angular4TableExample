import { Component, OnInit } from '@angular/core';
import { AddressService } from "app/services/address.service";

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})
export class BasicTableComponent implements OnInit {
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
