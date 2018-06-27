import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookiePressComponent } from './mookie-press.component';

describe('MookiePressComponent', () => {
  let component: MookiePressComponent;
  let fixture: ComponentFixture<MookiePressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookiePressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookiePressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
