import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductService} from '../../product.service';
import {UserServiceService} from 'src/app/Service/user-service.service';
import { ProductList } from 'src/app/HelperTs/ProductList';
import { User} from 'src/app/HelperTs/User';


@Component({
  selector: 'app-assign-product',
  templateUrl: './assign-product.component.html',
  styleUrls: ['./assign-product.component.css']
})
export class AssignProductComponent implements OnInit {

  constructor(private productService:ProductService,private userService:UserServiceService) { }
  proCodeKey:string;
  userCodeKey:string;
  Ulist:User[]=[];
  Plist:ProductList[]=[];
  ngOnInit() {
  }
  searchProductCode(){
   // this.productService.getMockSearchPCode(this.proCodeKey).subscribe(prolist=>this.Plist.push(prolist))
  }
  searchUserCode(){
      this.userService.getUserbyCode(this.userCodeKey).subscribe(userlist=>this.Ulist.push(userlist))
  }
}
