import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookiePreloaderComponent } from './mookie-preloader.component';

describe('MookiePreloaderComponent', () => {
  let component: MookiePreloaderComponent;
  let fixture: ComponentFixture<MookiePreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookiePreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookiePreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
