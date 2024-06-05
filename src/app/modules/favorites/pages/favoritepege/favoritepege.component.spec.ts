import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritepegeComponent } from './favoritepege.component';

describe('FavoritepegeComponent', () => {
  let component: FavoritepegeComponent;
  let fixture: ComponentFixture<FavoritepegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritepegeComponent]
    });
    fixture = TestBed.createComponent(FavoritepegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
