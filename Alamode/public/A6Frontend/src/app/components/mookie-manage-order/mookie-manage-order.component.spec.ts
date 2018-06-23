import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManageOrderComponent } from './mookie-manage-order.component';

describe('MookieManageOrderComponent', () => {
  let component: MookieManageOrderComponent;
  let fixture: ComponentFixture<MookieManageOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManageOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManageOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
