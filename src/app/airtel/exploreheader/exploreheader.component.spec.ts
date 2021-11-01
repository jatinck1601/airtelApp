import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreheaderComponent } from './exploreheader.component';

describe('ExploreheaderComponent', () => {
  let component: ExploreheaderComponent;
  let fixture: ComponentFixture<ExploreheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
