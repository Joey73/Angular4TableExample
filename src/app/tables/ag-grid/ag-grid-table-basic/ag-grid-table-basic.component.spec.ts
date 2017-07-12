import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTableBasicComponent } from './ag-grid-table-basic.component';

describe('AgGridTableBasicComponent', () => {
  let component: AgGridTableBasicComponent;
  let fixture: ComponentFixture<AgGridTableBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridTableBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
