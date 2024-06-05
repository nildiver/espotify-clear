import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorypagesComponent } from './historypages.component';

describe('HistorypagesComponent', () => {
  let component: HistorypagesComponent;
  let fixture: ComponentFixture<HistorypagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorypagesComponent]
    });
    fixture = TestBed.createComponent(HistorypagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
