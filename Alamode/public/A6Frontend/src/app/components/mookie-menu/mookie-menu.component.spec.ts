import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieMenuComponent } from './mookie-menu.component';

describe('MookieMenuComponent', () => {
  let component: MookieMenuComponent;
  let fixture: ComponentFixture<MookieMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
