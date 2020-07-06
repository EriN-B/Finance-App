import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Transaction, CashFlow, CashService } from 'src/app/services/cash.service';

@Component({
  selector: 'app-cash-flow-modal',
  templateUrl: './cash-flow-modal.page.html',
  styleUrls: ['./cash-flow-modal.page.scss'],
})
export class CashFLowModalPage implements OnInit {

  categories = [
    { name: 'Food', icon: 'pizza' },
    { name: 'Rent', icon: 'business' },
    { name: 'Shopping', icon: 'cart' },
    { name: 'Sports', icon: 'fitness' },
    { name: 'Education', icon: 'school' },
    { name: 'Travel', icon: 'airplane' }
  ];

  created_at = new Date().toISOString();

  transaction: Transaction = {
    created_at: Date.now(),
    title: '',
    amount: 0,
    type: CashFlow.Expense,
    category: this.categories[0]
  };

  constructor(private ModalCntlr: ModalController, private CashService: CashService, private toastCtrl: ToastController) {

  }


  ngOnInit() {
  }

  addTransaction() {
    this.transaction.type = +this.transaction.type;

    this.transaction.created_at = new Date(this.created_at).getTime();

    if (this.transaction.type == CashFlow.Income) {
      this.transaction.category = { name: 'Income', icon: 'cash' };
    }

    this.CashService.addTransaction(this.transaction).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Transaction saved',
        duration: 2000
      });

      toast.then(toast => toast.present());
      this.ModalCntlr.dismiss({ reload: true });
    });
  }
  close() {
    this.ModalCntlr.dismiss();
  }
}
