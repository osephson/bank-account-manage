import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject, map } from 'rxjs';
import { Account } from '../models/account.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  private apiUrl = environment.apiUrl;
  private accountChangedSource = new Subject<void>();
  accountChanged$ = this.accountChangedSource.asObservable();

  constructor(private http: HttpClient) {}

  accountChanged(): void {
    this.accountChangedSource.next();
  }

  getAccounts(): Observable<Account[]> {
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((response) => response.items));
  }

  getAccount(id: string): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`);
  }

  getAccountWithUnmask(id: string, unmask: boolean): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/${id}`, {
      params: new HttpParams().set('unmasked', unmask),
    });
  }

  updateAccount(id: string, account: Partial<Account>): Observable<Account> {
    return this.http.patch<Account>(`${this.apiUrl}/${id}`, account);
  }
}
