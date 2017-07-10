import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-table-overview',
  templateUrl: './table-overview.component.html',
  styleUrls: ['./table-overview.component.css']
})
export class TableOverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBasicTableClick(){
    this.router.navigate(['/basic-table']);
  }

  onFormattedTableClick(){
    this.router.navigate(['/formatted-table']);
  }
}
