import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PasswordCard } from 'src/services/password.service';

@Component({
  selector: 'app-password-card',
  templateUrl: './password-card.component.html',
  styleUrls: ['./password-card.component.css']
})
export class PasswordCardComponent implements OnInit {

  @Input()
  public passwordCard!: PasswordCard;

  @Input()
  public index: number;

  @Output()
  public onRemove = new EventEmitter<PasswordCard>();

  @Output()
  public onEdit = new EventEmitter<PasswordCard>();

  constructor() { }

  ngOnInit(): void { }

  remove(passwordCard: PasswordCard) {
    this.onRemove.emit(passwordCard);
  }

  edit(passwordCard: PasswordCard) {
    this.onEdit.emit(passwordCard);
  }
}
