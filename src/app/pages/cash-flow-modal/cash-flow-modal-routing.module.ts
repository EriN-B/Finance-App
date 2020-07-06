import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashFLowModalPage } from './cash-flow-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CashFLowModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashFLowModalPageRoutingModule {}
