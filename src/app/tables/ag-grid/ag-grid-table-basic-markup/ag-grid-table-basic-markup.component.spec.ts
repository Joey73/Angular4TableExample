import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTableBasicMarkupComponent } from './ag-grid-table-basic-markup.component';

describe('AgGridTableBasicComponent', () => {
  let component: AgGridTableBasicMarkupComponent;
  let fixture: ComponentFixture<AgGridTableBasicMarkupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridTableBasicMarkupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTableBasicMarkupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
