import { Component, OnInit } from '@angular/core';
import {MultiOption} from '../../HelperTs/MultiOption'
@Component({
  selector: 'app-product-mgr',
  templateUrl: './product-mgr.component.html',
  styleUrls: ['./product-mgr.component.css']
})
export class ProductMgrComponent implements OnInit {

  constructor() { }
  Createnum:number;
  ProOperations: string = 'ProOperations';
  selectedoption:any;
  multioption:MultiOption [] = [
    { id: '1', Name: 'Created List' },
    { id: '2', Name: 'Assigned List' },
    { id: '3', Name: 'Converted List' }
];
  ngOnInit() {
  }
  changedSelection()  {
    console.log(this.selectedoption);
    if(this.selectedoption=='Created List'){
      this.Createnum=4;
    }
    if(this.selectedoption=='Assigned List'){
      this.Createnum=5;
    }
    if(this.selectedoption=='Converted List'){
      this.Createnum=6;
    }
  }
  Create(num:number){
    this.Createnum=num;
  }

}
