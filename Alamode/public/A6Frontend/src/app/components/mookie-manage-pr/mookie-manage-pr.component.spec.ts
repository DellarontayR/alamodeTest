import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManagePrComponent } from './mookie-manage-pr.component';

describe('MookieManagePrComponent', () => {
  let component: MookieManagePrComponent;
  let fixture: ComponentFixture<MookieManagePrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManagePrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManagePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
