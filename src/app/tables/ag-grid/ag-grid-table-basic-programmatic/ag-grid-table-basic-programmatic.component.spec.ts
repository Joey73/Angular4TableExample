import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTableBasicProgrammaticComponent } from './ag-grid-table-basic-programmatic.component';

describe('AgGridTableBasicProgrammaticComponent', () => {
  let component: AgGridTableBasicProgrammaticComponent;
  let fixture: ComponentFixture<AgGridTableBasicProgrammaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridTableBasicProgrammaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTableBasicProgrammaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
