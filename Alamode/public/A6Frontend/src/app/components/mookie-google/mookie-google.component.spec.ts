import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieGoogleComponent } from './mookie-google.component';

describe('MookieGoogleComponent', () => {
  let component: MookieGoogleComponent;
  let fixture: ComponentFixture<MookieGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
