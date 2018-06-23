import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManageUsersComponent } from './mookie-manage-users.component';

describe('MookieManageUsersComponent', () => {
  let component: MookieManageUsersComponent;
  let fixture: ComponentFixture<MookieManageUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManageUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
