import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorypagesComponent } from './historypages.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HistorypagesComponent', () => {
  let component: HistorypagesComponent;
  let fixture: ComponentFixture<HistorypagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
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
