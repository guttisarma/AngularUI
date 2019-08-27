import { Component, OnInit } from '@angular/core';
import {MultiOption} from '../../HelperTs/MultiOption'
@Component({
  selector: 'app-product-mgr',
  templateUrl: './product-mgr.component.html',
  styleUrls: ['./product-mgr.component.css']
})
export class ProductMgrComponent implements OnInit {

  constructor() { }
  ProOperations: string = 'ProOperations';
  multioption:string [] =['',''];
  ngOnInit() {
  }

}
