import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  private params: any;

  constructor() { }

  ngOnInit() {
  }

  agInit(params: any): void {
        this.params = params;
  }
}
