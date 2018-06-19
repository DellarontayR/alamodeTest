import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieCheckoutComponent } from './mookie-checkout.component';

describe('MookieCheckoutComponent', () => {
  let component: MookieCheckoutComponent;
  let fixture: ComponentFixture<MookieCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
