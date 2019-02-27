import { Component, OnInit } from '@angular/core';
import { TransacService } from 'src/app/Service/transac.service';
import {Transaction} from 'src/app/HelperTs/Transactions';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-transac-list',
  templateUrl: './transac-list.component.html',
  styleUrls: ['./transac-list.component.css']
})
export class TransacListComponent implements OnInit {

  constructor(private transacservice:TransacService) { }
  MyTransactions:Transaction[];
  PendingTransactions:Transaction[]=[];
  CompletedTransactions:Transaction[]=[];
  ngOnInit() {
    this.getMyTransaction();
  }
  getMyTransaction(){
     this.transacservice.InlineTranscatPending().subscribe(x=>this.MyTransactions=x);
     this.MyTransactions.forEach(
       item=>{
          this.PendingTransactions.push(item);
  });
  this.transacservice.InlineTranscatComplete().subscribe(x=>this.MyTransactions=x);
  this.MyTransactions.forEach(
    item=>{
      this.CompletedTransactions.push(item);
    });

}
}
