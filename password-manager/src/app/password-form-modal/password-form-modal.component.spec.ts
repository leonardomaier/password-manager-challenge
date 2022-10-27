import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PasswordService } from '../../services/password.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { ModalComponent } from '../modal/modal.component';

import { PasswordFormModalComponent } from './password-form-modal.component';

describe('PasswordFormModalComponent', () => {
  let component: PasswordFormModalComponent;
  let fixture: ComponentFixture<PasswordFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ToastrModule.forRoot(), ReactiveFormsModule],
      declarations: [
        PasswordFormModalComponent, 
        ModalComponent, 
        ConfirmModalComponent, 
        PasswordFormModalComponent,
        FormInputComponent
      ],
      providers: [PasswordService]
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
