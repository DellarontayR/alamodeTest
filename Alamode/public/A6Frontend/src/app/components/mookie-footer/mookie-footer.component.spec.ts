import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieFooterComponent } from './mookie-footer.component';

describe('MookieFooterComponent', () => {
  let component: MookieFooterComponent;
  let fixture: ComponentFixture<MookieFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
