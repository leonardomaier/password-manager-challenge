import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, tap } from 'rxjs';
import { PasswordCard, PasswordService } from 'src/services/password.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'password-manager';

  public passwords: PasswordCard[];

  constructor(private passwordService: PasswordService) { }

  ngOnInit(): void {
    this.passwordService.get().subscribe(passwords => {
      this.passwords = passwords;
    });
  }

  addPassword(passwordCard: PasswordCard) {
    this.passwords.push(passwordCard)
  }

  editPassword(passwordCard: PasswordCard) {

    const passwordIndex = this.passwords.findIndex(p => p.id === passwordCard.id);

    if (passwordIndex === -1) return;

    this.passwords[passwordIndex] = { id: passwordCard.id, ...passwordCard }
  }

  removePassword(passwordCard: PasswordCard) {
    const passwordCardIndex = this.passwords.findIndex(p => p.id === passwordCard.id);
    this.passwords.splice(passwordCardIndex, 1);
  }
}
