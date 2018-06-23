import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieSocialComponent } from './mookie-social.component';

describe('MookieSocialComponent', () => {
  let component: MookieSocialComponent;
  let fixture: ComponentFixture<MookieSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
