import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveNavigationComponent } from './responsive-navigation.component';

describe('ResponsiveNavigationComponent', () => {
  let component: ResponsiveNavigationComponent;
  let fixture: ComponentFixture<ResponsiveNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
