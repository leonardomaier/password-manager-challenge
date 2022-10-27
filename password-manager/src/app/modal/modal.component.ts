import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input()
  public buttonText: string = "Open Modal"

  @Input()
  public modalTitle: string = "Modal Title"

  @Input()
  public buttonColor: string = "bg-green-500"

  @Output()
  public buttonClick = new EventEmitter<void>();

  public showModal: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  toggleModal() {
    this.showModal = !this.showModal;
    this.buttonClick.emit();
  }

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }
}
