import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { Account } from '../models/account.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  accounts: Account[] = [];

  constructor(
    private accountsService: AccountsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe(
      (accounts) => {
        this.accounts = accounts;
      },
      (error) => {
        this.showError({ error });
      }
    );
  }

  showError(error: any): void {
    const errorMessage =
      error.error.error._error.message || 'An unknown error occurred!';
    this.toastr.error(errorMessage, 'Error');
  }
}
