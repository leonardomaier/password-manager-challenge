import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PasswordCard, PasswordService } from '../../services/password.service';
import { FormInputComponent } from '../form-input/form-input.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-password-form-modal',
  templateUrl: './password-form-modal.component.html',
  styleUrls: ['./password-form-modal.component.css']
})
export class PasswordFormModalComponent implements OnInit {

  @ViewChild(ModalComponent, { static: true })
  public modalComponent!: ModalComponent;

  @Input()
  public passwordCard!: PasswordCard;

  @Input()
  public buttonText: string = "Add new password"

  @Input()
  public buttonColor: string = 'bg-green-500'

  @Output()
  public save = new EventEmitter<PasswordCard>();

  @Output()
  public edit = new EventEmitter<PasswordCard>();

  public isEditing: boolean = false;

  public showPassword: boolean = false;

  public clipboardFull: boolean = false;

  public passwordForm = new FormGroup({
    url: new FormControl('', {
      validators: [Validators.required]
    }),
    name: new FormControl('', {
      validators: [Validators.required]
    }),
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    })
  })

  get form(): FormGroup {
    return this.passwordForm
  }

  constructor(
    private passwordService: PasswordService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void { }

  private clearFormAndCloseModal() {
    this.modalComponent.close();
    this.passwordForm.reset();
  }

  private doSave(passwordCard: PasswordCard) {
    this.passwordService
      .create(passwordCard)
      .subscribe(({ id }) => {
        this.clearFormAndCloseModal()
        this.save.emit({ id, ...passwordCard });
        this.toastrService.success('Password created successfully!');
      });
  }

  private doUpdate(passwordCard: PasswordCard) {
    this.passwordService
      .update({ id: this.passwordCard.id, ...passwordCard })
      .subscribe(({ id }) => {
        this.clearFormAndCloseModal();
        this.edit.emit({ id, ...passwordCard });
        this.toastrService.success('Password updated successfully!');
      });
  }

  saveOrUpdate() {
    const { url, name, username, password } = this.passwordForm.value;

    const passwordCard: PasswordCard = {
      url: url || '',
      name: name || '',
      username: username || '',
      password: password || ''
    };

    if (!this.passwordForm.valid) {
      Object.keys(this.passwordForm.controls).forEach((control: string) => {
        this.passwordForm.get(control)?.markAsDirty();
      });
      return;
    }

    if (this.isEditing) {
      this.doUpdate(passwordCard)
      return;
    }

    this.doSave(passwordCard);
  }

  copyToClipboard(input: FormInputComponent) {

    const content = input.control?.value;

    if (!content) return;

    navigator.clipboard.writeText(content).then(() => {
      this.clipboardFull = true;
    }).catch(() => {
      console.error("Unable to copy text");
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword
  }

  onModalButtonClick() {
    this.isEditing = false;
    this.clipboardFull = false;

    if (this.passwordCard) {
      this.passwordForm.patchValue(this.passwordCard);
      this.isEditing = true;
    }
  }

  cancel() {
    this.modalComponent.close()
  }
}
