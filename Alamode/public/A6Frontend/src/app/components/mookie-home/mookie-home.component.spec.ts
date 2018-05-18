import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieHomeComponent } from './mookie-home.component';

describe('MookieHomeComponent', () => {
  let component: MookieHomeComponent;
  let fixture: ComponentFixture<MookieHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
