import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackpegeComponent } from './trackpege.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TrackpegeComponent', () => {
  let component: TrackpegeComponent;
  let fixture: ComponentFixture<TrackpegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
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
