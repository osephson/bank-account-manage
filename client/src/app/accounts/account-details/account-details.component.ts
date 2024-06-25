import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsService } from '../services/accounts.service';
import { Account } from '../models/account.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css'],
})
export class AccountDetailsComponent implements OnInit {
  account!: Account;
  isUnmasked: boolean = false;
  newName: string = '';

  constructor(
    private route: ActivatedRoute,
    private accountsService: AccountsService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const accountId = params['id'];
      this.accountsService.getAccount(accountId).subscribe(
        (account) => {
          this.account = account;
          this.isUnmasked = false;
        },
        (error) => {
          this.showError({ error });
        }
      );
    });
  }

  toggleMask(): void {
    this.isUnmasked = !this.isUnmasked;
    const accountId = this.route.snapshot.paramMap.get('id')!;
    if (this.isUnmasked) {
      this.accountsService.getAccountWithUnmask(accountId, true).subscribe(
        (account) => {
          this.account = account;
        },
        (error) => {
          this.showError({ error });
        }
      );
    } else {
      this.accountsService.getAccount(accountId).subscribe(
        (account) => {
          this.account = account;
        },
        (error) => {
          this.showError({ error });
        }
      );
    }
  }

  updateAccountName(): void {
    if (this.newName) {
      this.accountsService
        .updateAccount(this.account._id, { name: this.newName })
        .subscribe(
          (updatedAccount) => {
            this.account.name = updatedAccount.name;
            this.newName = '';
            this.toastr.success('Account name updated successfully');
            this.accountsService.accountChanged();
          },
          (error) => {
            this.showError({ error });
          }
        );
    }
  }

  showError(error: any): void {
    const errorMessage =
      error.error.error._error.message || 'An unknown error occurred!';
    this.toastr.error(errorMessage, 'Error');
  }
}
