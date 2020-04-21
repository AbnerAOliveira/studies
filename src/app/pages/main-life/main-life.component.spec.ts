import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLifeComponent } from './main-life.component';

describe('MainLifeComponent', () => {
  let component: MainLifeComponent;
  let fixture: ComponentFixture<MainLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
