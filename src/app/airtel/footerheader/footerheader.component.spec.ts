import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterheaderComponent } from './footerheader.component';

describe('FooterheaderComponent', () => {
  let component: FooterheaderComponent;
  let fixture: ComponentFixture<FooterheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
