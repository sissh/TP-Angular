import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';


export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  date: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'exercice-3';
    private _jsonURL = 'assets/data/transactions.json';
    transactions: Transaction[] = [];
    sortedTransactions: Transaction[] = [];
  
    public getJSON(): Observable<any> {
      return this.http.get<Transaction>(this._jsonURL);
    }
  
    constructor(private http: HttpClient) {
      this.getJSON().subscribe(data => {
        this.transactions = data
    })
      this.sortedTransactions = this.transactions.slice();
    }
  
    ngOnInit() {
      
    }
  
    public sortData(sort: Sort) {
      const data = this.transactions.slice();
      if (!sort.active || sort.direction === '') {
        this.transactions= data;
        return;
      }
  
      this.transactions = data.sort((a, b) => {
        const isAsc = sort.direction === "asc";
        switch (sort.active) {
          case 'id':
            return compare(a.id, b.id, isAsc);
          case 'amount':
            return compare(a.amount, b.amount, isAsc);
          case 'balance':
            return compare(a.balance, b.balance, isAsc);
          case 'label':
            return compare(a.label, b.label, isAsc);
          case 'date':
            return compare(a.date, b.date, isAsc);
          default:
            return 0;
        }
      })
    }
  
    public checkTransaction() {
      console.log("hey");
    }
}

function compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}