import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface PasswordCard {
  id?: string | null | undefined;
  url: string | null | undefined;
  name: string | null | undefined;
  username: string | null | undefined;
  password: string | null | undefined;
}

@Injectable()
export class PasswordService {

  private BASE_URL = "http://localhost:3000/password-cards"

  constructor(private http: HttpClient) { }

  get(): Observable<PasswordCard[]> {
    return this.http.get<PasswordCard[]>(this.BASE_URL)
  }

  create(passwordCard: PasswordCard) {
    return this.http.post<PasswordCard>(this.BASE_URL, passwordCard)
  }

  update(passwordCard: PasswordCard) {
    return this.http.put<PasswordCard>(`${this.BASE_URL}/${passwordCard.id}`, passwordCard)
  }

  delete(passwordCard: PasswordCard) {
    return this.http.delete<void>(`${this.BASE_URL}/${passwordCard.id}`)
  }
}