import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { ProductList, AssignProdToUser, PreviewPopupProList, PreviewPopupAssignment, AssProHelper } from 'src/app/HelperTs/ProductList';
import { User } from 'src/app/HelperTs/User';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-assign-product',
  templateUrl: './assign-product.component.html',
  styleUrls: ['./assign-product.component.css']
})
export class AssignProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private userService: UserServiceService,
    private modalService: NgbModal) { }
  proCodeKey: string;
  userCodeKey: string;
  Ulist: User[] = [];
  Plist: ProductList[] = [];
  assProToUser: AssignProdToUser;
  isAssignmentCompleted: boolean;
  selectedprod: AssProHelper[] = [];
  selectedPro: ProductList[] = [];
  selectedUsr: User;

  ngOnInit() {

    /*   let p = new ProductList();
      p.Code = 'p_cre_093';
      p.Name = 'Pname'
      p.Description = 'somedescription';
      p.Quantity = 3450;
      this.Plist.push(p);
      let p1 = new ProductList();
      p1.Code = 'p_cre_095';
      p1.Name = 'Pname'
      p1.Description = 'somedescription';
      p1.Quantity = 3450;
      this.Plist.push(p1);
      let p2 = new ProductList();
      p2.Code = 'p_cre_083';
      p2.Name = 'Pname'
      p2.Description = 'somedescription';
      p2.Quantity = 3450;
  
      this.Plist.push(p);
      this.Plist.push(p);
      p.Code = 'p_cre_193';
      this.Plist.push(p);
      p.Code = 'p_cre_063';
      this.Plist.push(p);
      p.Code = 'p_cre_067';
      this.Plist.push(p);
      p.Code = 'p_cre_793';
      this.Plist.push(p);
      let u = new User();
      u.Code = 'User_1';
      u.Name = 'UserName';
      u.ManagerCode = 'Manage1';
      this.Ulist.push(u);
      //#mock */
    this.productService.getProductList().subscribe(lsProduct => this.Plist = lsProduct);
    this.userService.getMyUsers().subscribe(lsusers => this.Ulist = lsusers);
  }

  selectProduct(pCode: any): void {

    this.selectedprod.push(pCode);
  }
  selectUser(UserCode: any): void {
    this.selectedUsr = UserCode;
  }

  OnConformDetails() {
    //we need to get assProToUser info from UI
    let sampletry: any;
    sampletry = this.selectedprod.slice();
    /* console.log(sampletry);
    console.log('selected products are '+this.selectedprod.length); */
    if (this.selectedprod.length > 0 && this.selectedprod != null && this.selectedUsr != undefined) {
      const modalRef = this.modalService.open(PreviewPopupComponent);
      modalRef.componentInstance.selProduct = [...this.selectedprod];
      //console.log(modalRef.componentInstance.selProduct);

      modalRef.componentInstance.selectedUser = this.selectedUsr;
    }

    //this.productService.submitAssProduct(this.assProToUser).subscribe(isitdone => this.isAssignmentCompleted = isitdone);
  }
  searchProductCode() {
    // this.productService.getMockSearchPCode(this.proCodeKey).subscribe(prolist=>this.Plist.push(prolist))
  }
  searchUserCode() {
    // this.userService.getUserbyCode(this.userCodeKey).subscribe(userlist=>this.Ulist.push(userlist))
  }
}
//For popup Opening
@Component({
  selector: 'preview-popup',
  templateUrl: './preview-popup.html',
  styleUrls: ['./assign-product.component.css']
})
export class PreviewPopupComponent {
  constructor(public activeModal: NgbActiveModal, private proService: ProductService, private router: Router) {

  }
  @Input() selectedUser: User;

  @Input() selProduct: ProductList[];
  assignProtoUser() {
    //check all Products reqired quantity is filled or not
    let assProToUser = new AssignProdToUser;
    assProToUser.lsproducts = [];
    for (var i = 0; i < this.selProduct.length; ++i) {
      let proQua = new AssProHelper();
      proQua.ProductId = this.selProduct[i].ProductPID;
      proQua.Qunty = this.selProduct[i].RequiredQuantity;
      console.log(proQua);
      assProToUser.lsproducts.push(proQua);
    }
    assProToUser.AssignedUserPid = this.selectedUser.UserId;
    console.log(assProToUser);
    this.proService.submitAssProduct(assProToUser).subscribe(result => {
      console.log('Oparation status is ' + result);
      this.activeModal.dismiss('Cross click');
      this.router.navigateByUrl('/ProductList');
    });
  }
}
