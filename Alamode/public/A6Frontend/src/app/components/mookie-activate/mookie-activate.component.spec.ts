import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieActivateComponent } from './mookie-activate.component';

describe('MookieActivateComponent', () => {
  let component: MookieActivateComponent;
  let fixture: ComponentFixture<MookieActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieActivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
