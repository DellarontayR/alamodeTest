import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieAboutComponent } from './mookie-about.component';

describe('MookieAboutComponent', () => {
  let component: MookieAboutComponent;
  let fixture: ComponentFixture<MookieAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
