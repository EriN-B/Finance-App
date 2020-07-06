import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashFLowModalPageRoutingModule } from './cash-flow-modal-routing.module';

import { CashFLowModalPage } from './cash-flow-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashFLowModalPageRoutingModule
  ],
  declarations: [CashFLowModalPage]
})
export class CashFLowModalPageModule {}
