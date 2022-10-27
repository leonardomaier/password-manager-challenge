import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PasswordService } from 'src/services/password.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ModalComponent } from '../modal/modal.component';
import { PasswordFormModalComponent } from '../password-form-modal/password-form-modal.component';

import { PasswordCardComponent } from './password-card.component';

describe('PasswordCardComponent', () => {
  let component: PasswordCardComponent;
  let fixture: ComponentFixture<PasswordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, ToastrModule.forRoot(), ReactiveFormsModule ],
      declarations: [ PasswordCardComponent, PasswordFormModalComponent, ModalComponent, ConfirmModalComponent ],
      providers: [ PasswordService ]
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
