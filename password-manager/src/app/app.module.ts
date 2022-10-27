import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordCardComponent } from './password-card/password-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveNavigationComponent } from './responsive-navigation/responsive-navigation.component';
import { ModalComponent } from './modal/modal.component';
import { PasswordFormModalComponent } from './password-form-modal/password-form-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PasswordService } from '../services/password.service';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordCardComponent,
    ResponsiveNavigationComponent,
    ModalComponent,
    PasswordFormModalComponent,
    ConfirmModalComponent,
    FormInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [PasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
