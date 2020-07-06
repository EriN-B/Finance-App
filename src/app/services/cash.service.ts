//import { Transaction } from './cash.service';
import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const TRANSACTION_KEY = 'transactions';
const SELECTED_CURRENCY_KEY = 'selected-currency';

export enum CashFlow {
  Expense,
  Income,
}

export interface Transaction {
  created_at: number
  title: string,
  amount: number,
  type: CashFlow,
  category: {
    name: string,
    icon: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class CashService {

  constructor(private storage: Storage, private toastCtrl: ToastController) { }

  addTransaction(transaction: Transaction) {
    return this.getTransactions().then(transactions => {
      transactions.push(transaction);
      return this.storage.set(TRANSACTION_KEY, transactions);
    });
  }

  getTransactions(): Promise<Transaction[]> {
    return this.storage.get(TRANSACTION_KEY).then(res => {
      if (res) {
        return res.sort((trans: Transaction, trans2: Transaction) => {
          return trans2.created_at - trans.created_at;
        })
      } else {
        return [];
      }
    });
  }

  updateTransactions(transactions) {
    return this.storage.set(TRANSACTION_KEY, transactions);
  }

  updateCurrency(selected) {
    this.storage.set(SELECTED_CURRENCY_KEY, selected).then(() => {
      let toast = this.toastCtrl.create({
        message: 'Currency updated',
        duration: 2000
      });
      toast.then(toast => toast.present());
    })
  }

  clearData() {
    this.storage.remove(TRANSACTION_KEY);
    let toast = this.toastCtrl.create({
      message: 'Transactions cleared!',
      duration: 2000
    });
    toast.then(toast => toast.present());
  }
}