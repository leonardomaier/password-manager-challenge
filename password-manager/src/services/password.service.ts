import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface PasswordCard {
  id?: string;
  url: string;
  name: string;
  username: string;
  password: string;
}

interface SearchParams {
  term: string;
}

@Injectable()
export class PasswordService {

  private BASE_URL = "http://localhost:3000/password-cards"

  constructor(private http: HttpClient) { }

  get({ term }: SearchParams = { term: '' }): Observable<PasswordCard[]> {
    return this.http.get<PasswordCard[]>(this.BASE_URL, { params: new HttpParams().set('term', term) })
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