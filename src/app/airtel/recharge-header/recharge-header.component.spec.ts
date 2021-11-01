import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeHeaderComponent } from './recharge-header.component';

describe('RechargeHeaderComponent', () => {
  let component: RechargeHeaderComponent;
  let fixture: ComponentFixture<RechargeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
