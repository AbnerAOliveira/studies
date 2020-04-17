import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteLazyComponent } from './teste-lazy.component';

describe('TesteLazyComponent', () => {
  let component: TesteLazyComponent;
  let fixture: ComponentFixture<TesteLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
