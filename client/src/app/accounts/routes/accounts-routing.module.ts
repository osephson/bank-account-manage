import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from '../account-details/account-details.component';
import { OverviewComponent } from '../overview/overview.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: ':id', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
