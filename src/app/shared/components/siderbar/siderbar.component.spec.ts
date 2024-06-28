import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarComponent } from './siderbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SiderbarComponent', () => {
  let component: SiderbarComponent;
  let fixture: ComponentFixture<SiderbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [SiderbarComponent]
    });
    fixture = TestBed.createComponent(SiderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
