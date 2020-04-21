import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefazerComponent } from './refazer.component';

describe('RefazerComponent', () => {
  let component: RefazerComponent;
  let fixture: ComponentFixture<RefazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
