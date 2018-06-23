import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManageOrdersComponent } from './mookie-manage-orders.component';

describe('MookieManageOrdersComponent', () => {
  let component: MookieManageOrdersComponent;
  let fixture: ComponentFixture<MookieManageOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManageOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManageOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
