import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountsRoutingModule } from './routes/accounts-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [OverviewComponent, AccountDetailsComponent],
  imports: [CommonModule, FormsModule, AccountsRoutingModule],
})
export class AccountsModule {}
