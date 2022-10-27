import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { PasswordService } from 'src/services/password.service';

import { PasswordFormModalComponent } from './password-form-modal.component';

describe('PasswordFormModalComponent', () => {
  let component: PasswordFormModalComponent;
  let fixture: ComponentFixture<PasswordFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule, ToastrModule.forRoot() ],
      declarations: [ PasswordFormModalComponent ],
      providers: [ PasswordService ]
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
