import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayDataBindingsComponent } from './two-way-data-bindings.component';

describe('TwoWayDataBindingsComponent', () => {
  let component: TwoWayDataBindingsComponent;
  let fixture: ComponentFixture<TwoWayDataBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoWayDataBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayDataBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
