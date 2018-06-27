import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MookiePrComponent } from './mookie-pr.component';

describe('MookiePrComponent', () => {
  let component: MookiePrComponent;
  let fixture: ComponentFixture<MookiePrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MookiePrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MookiePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
