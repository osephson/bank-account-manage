import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts/services/accounts.service';
import { Account } from './accounts/models/account.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];
  showDropdown = false;
  private subscriptions: Subscription[] = [];

  constructor(private accountsService: AccountsService) {}
  ngOnInit(): void {
    this.loadAccounts();
    this.listenForAccountChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  private loadAccounts(): void {
    this.accountsService.getAccounts().subscribe(
      (accounts) => {
        this.accounts = accounts;
      },
      (error) => {
        console.error('Failed to load accounts:', error);
      }
    );
  }

  private listenForAccountChanges(): void {
    this.accountsService.accountChanged$.subscribe(
      () => {
        this.loadAccounts();
      },
      (error) => {
        console.error('Failed to listen for account changes:', error);
      }
    );
  }
}
