import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieRegisterComponent } from './mookie-register.component';

describe('MookieRegisterComponent', () => {
  let component: MookieRegisterComponent;
  let fixture: ComponentFixture<MookieRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
