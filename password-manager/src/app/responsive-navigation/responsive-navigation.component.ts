import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable, tap } from 'rxjs';
import { PasswordCard } from '../../services/password.service';

@Component({
  selector: 'app-responsive-navigation',
  templateUrl: './responsive-navigation.component.html',
  styleUrls: ['./responsive-navigation.component.css']
})
export class ResponsiveNavigationComponent implements OnInit {

  public searchField: FormControl;

  @Output()
  public submit = new EventEmitter<PasswordCard>();

  @Output()
  public search = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(() => this.onSearch());
  }

  onSearch() {
    this.search.emit(this.searchField.value);
  }

  onSave(passwordCard: PasswordCard) {
    this.submit.emit(passwordCard);
  }
}
