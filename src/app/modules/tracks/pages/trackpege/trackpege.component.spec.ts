import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpegeComponent } from './trackpege.component';

describe('TrackpegeComponent', () => {
  let component: TrackpegeComponent;
  let fixture: ComponentFixture<TrackpegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackpegeComponent]
    });
    fixture = TestBed.createComponent(TrackpegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
