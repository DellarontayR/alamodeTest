import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieCartComponent } from './mookie-cart.component';

describe('MookieCartComponent', () => {
  let component: MookieCartComponent;
  let fixture: ComponentFixture<MookieCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
