import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordCardComponent } from './password-card.component';

describe('PasswordCardComponent', () => {
  let component: PasswordCardComponent;
  let fixture: ComponentFixture<PasswordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordCardComponent);
    component = fixture.componentInstance;
    component.passwordCard = {
      id: '1',
      name: 'Test password',
      url: 'test@test.com',
      username: 'email@test.com',
      password: 'Password@123'
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
