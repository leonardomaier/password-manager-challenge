import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PasswordCard, PasswordService } from 'src/services/password.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @ViewChild(ModalComponent, { static: true })
  public modalComponent!: ModalComponent;

  @Input()
  public passwordCard!: PasswordCard;

  @Input()
  public buttonText: string = "Delete"

  @Input()
  public buttonColor: string = 'bg-red-500'

  @Output()
  public onConfirm = new EventEmitter<PasswordCard>();

  @Output()
  public onCancel = new EventEmitter<PasswordCard>();

  constructor(
    private passwordService: PasswordService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void { }

  confirm() {
    this.passwordService.delete(this.passwordCard).subscribe(() => {
      this.modalComponent.close();
      this.onConfirm.emit(this.passwordCard)
      this.toastrService.success("Password deleted successfully!");
    })
  }

  cancel() {
    this.modalComponent.close();
  }
}
