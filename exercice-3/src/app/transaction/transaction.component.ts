import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

export interface Transaction {
  id: string;
  amount: number;
  balance: number;
  label: string;
  description: string;
  date: Date;
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})

export class TransactionComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router,private http: HttpClient){}
  id: string = '01-03';
  private _jsonURL = 'assets/data/' + this.id + '.json';
  transaction: Transaction = {
    id: "",
    amount: 0,
    balance: 0,
    label: "",
    description: "",
    date: new Date() 
  }

  public getJSON(): Observable<any> {
    return this.http.get<Transaction>(this._jsonURL);
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
      this._jsonURL = 'assets/data/' + this.id + '.json';
    });

    this.getJSON().subscribe(data => {
      this.transaction = data
    });
  }
}
