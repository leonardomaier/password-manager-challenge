import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PasswordService } from '../../services/password.service';
import { FormInputComponent } from '../form-input/form-input.component';
import { ModalComponent } from '../modal/modal.component';
import { PasswordFormModalComponent } from '../password-form-modal/password-form-modal.component';

import { ResponsiveNavigationComponent } from './responsive-navigation.component';

describe('ResponsiveNavigationComponent', () => {
  let component: ResponsiveNavigationComponent;
  let fixture: ComponentFixture<ResponsiveNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveNavigationComponent, PasswordFormModalComponent, ModalComponent, FormInputComponent ],
      imports: [ HttpClientModule, ToastrModule.forRoot(), ReactiveFormsModule ],
      providers: [ PasswordService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveNavigationComponent);
    component = fixture.componentInstance;
    component.searchField = new FormControl('')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
