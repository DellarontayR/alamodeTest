import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieModalComponent } from './mookie-modal.component';

describe('MookieModalComponent', () => {
  let component: MookieModalComponent;
  let fixture: ComponentFixture<MookieModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
