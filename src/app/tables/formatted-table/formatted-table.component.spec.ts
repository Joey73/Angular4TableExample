import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattedTableComponent } from './formatted-table.component';

describe('FormattedTableComponent', () => {
  let component: FormattedTableComponent;
  let fixture: ComponentFixture<FormattedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
