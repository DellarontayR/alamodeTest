import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieFacebookComponent } from './mookie-facebook.component';

describe('MookieFacebookComponent', () => {
  let component: MookieFacebookComponent;
  let fixture: ComponentFixture<MookieFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
