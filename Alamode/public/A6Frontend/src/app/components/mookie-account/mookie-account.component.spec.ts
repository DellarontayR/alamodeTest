import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieAccountComponent } from './mookie-account.component';

describe('MookieAccountComponent', () => {
  let component: MookieAccountComponent;
  let fixture: ComponentFixture<MookieAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
