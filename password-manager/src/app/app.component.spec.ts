import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { PasswordService } from '../services/password.service';
import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { ModalComponent } from './modal/modal.component';
import { PasswordFormModalComponent } from './password-form-modal/password-form-modal.component';
import { ResponsiveNavigationComponent } from './responsive-navigation/responsive-navigation.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot()
      ],
      declarations: [
        AppComponent,
        ResponsiveNavigationComponent,
        PasswordFormModalComponent,
        ModalComponent,
        FormInputComponent
      ],
      providers: [ PasswordService ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
