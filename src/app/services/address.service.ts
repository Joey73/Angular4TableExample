import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddressService {
  myData: Array<any>;

  constructor(private http: Http) { }

  getAllLocalDummyAddresses(){
    return this.http.get('assets/dummy-data/addresses.json')
      .map(
        (response: Response) => {
          const stoas = response.json();
          for (const stoa of stoas) {
            console.log(stoa.auftragsnummer);
          }
          return stoas;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }

  getAllDummyAddresses(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(
        (response: Response) => {
          const addresses = response.json();
          for (const address of addresses) {
            console.log(address.name);
          }
          return addresses;
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      );
  }
}
