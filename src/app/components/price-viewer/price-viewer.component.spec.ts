import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceViewerComponent } from './price-viewer.component';

describe('PriceViewerComponent', () => {
  let component: PriceViewerComponent;
  let fixture: ComponentFixture<PriceViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
