import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieOrdersComponent } from './mookie-orders.component';

describe('MookieOrdersComponent', () => {
  let component: MookieOrdersComponent;
  let fixture: ComponentFixture<MookieOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
