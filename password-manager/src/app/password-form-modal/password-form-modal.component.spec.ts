import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFormModalComponent } from './password-form-modal.component';

describe('PasswordFormModalComponent', () => {
  let component: PasswordFormModalComponent;
  let fixture: ComponentFixture<PasswordFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordFormModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
