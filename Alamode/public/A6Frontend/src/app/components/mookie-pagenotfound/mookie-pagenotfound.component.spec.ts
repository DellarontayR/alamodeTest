import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookiePagenotfoundComponent } from './mookie-pagenotfound.component';

describe('MookiePagenotfoundComponent', () => {
  let component: MookiePagenotfoundComponent;
  let fixture: ComponentFixture<MookiePagenotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookiePagenotfoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookiePagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
