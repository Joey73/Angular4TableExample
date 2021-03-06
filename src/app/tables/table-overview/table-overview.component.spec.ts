import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOverviewComponent } from './table-overview.component';

describe('TableOverviewComponent', () => {
  let component: TableOverviewComponent;
  let fixture: ComponentFixture<TableOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
