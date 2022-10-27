import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PasswordCard } from 'src/services/password.service';

@Component({
  selector: 'app-responsive-navigation',
  templateUrl: './responsive-navigation.component.html',
  styleUrls: ['./responsive-navigation.component.css']
})
export class ResponsiveNavigationComponent implements OnInit {

  @Output()
  public submit = new EventEmitter<PasswordCard>();

  constructor() { }

  ngOnInit(): void {}

  onSave(passwordCard: PasswordCard) {
    this.submit.emit(passwordCard);
  }
}
