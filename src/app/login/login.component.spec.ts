import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { aLoginComponent } from './login.component';

describe('aLoginComponent', () => {
  let component: aLoginComponent;
  let fixture: ComponentFixture<aLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
