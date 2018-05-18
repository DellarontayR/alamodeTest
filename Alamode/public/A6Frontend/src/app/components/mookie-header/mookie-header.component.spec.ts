import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieHeaderComponent } from './mookie-header.component';

describe('MookieHeaderComponent', () => {
  let component: MookieHeaderComponent;
  let fixture: ComponentFixture<MookieHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
