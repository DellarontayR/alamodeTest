import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookieManageInventoryComponent } from './mookie-manage-inventory.component';

describe('MookieManageInventoryComponent', () => {
  let component: MookieManageInventoryComponent;
  let fixture: ComponentFixture<MookieManageInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookieManageInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookieManageInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
