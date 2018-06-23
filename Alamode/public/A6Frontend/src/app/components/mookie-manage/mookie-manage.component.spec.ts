import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManageComponent } from './mookie-manage.component';

describe('MookieManageComponent', () => {
  let component: MookieManageComponent;
  let fixture: ComponentFixture<MookieManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
