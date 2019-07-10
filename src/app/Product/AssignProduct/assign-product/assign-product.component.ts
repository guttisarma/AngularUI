import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../product.service';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { ProductList, AssignProdToUser, PreviewPopupProList, PreviewPopupAssignment, AssProHelper } from 'src/app/HelperTs/ProductList';
import { User } from 'src/app/HelperTs/User';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  selectedPro:ProductList[]=[];
  selectedUsr:User;

  ngOnInit() {

   let p =new ProductList();
    p.Code='p_cre_093';
    p.Name='Pname'
    p.Description='somedescription';
    p.Quantity=3450;
    this.Plist.push(p);
    let p1 =new ProductList();
    p1.Code='p_cre_095';
    p1.Name='Pname'
    p1.Description='somedescription';
    p1.Quantity=3450;    
    this.Plist.push(p1);
    let p2 =new ProductList();
    p2.Code='p_cre_083';
    p2.Name='Pname'
    p2.Description='somedescription';
    p2.Quantity=3450; 
    
    this.Plist.push(p);
    this.Plist.push(p);
    p.Code='p_cre_193';
    this.Plist.push(p);
    p.Code='p_cre_063';
    this.Plist.push(p);
    p.Code='p_cre_067';
    this.Plist.push(p);
    p.Code='p_cre_793';
    this.Plist.push(p);
    let u=new User();
    u.Code='User_1';
    u.Name='UserName';
    u.ManagerCode='Manage1';
    this.Ulist.push(u);
    //#mock
    //this.productService.getProductList().subscribe(lsProduct => this.Plist = lsProduct);
    //this.userService.getMyUsers().subscribe(lsusers => this.Ulist = lsusers);
  }
  /* InfoPopUp():void{
    alert("User popup appreas here");

    const dialogRef = this.dialog.open(PreviewPopup, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  } */
  selectProduct(pCode: any): void {
    let aProd = new AssProHelper();
    alert(pCode.innerText);
    /* aProd.ProductId = prodPID.innerText;
    alert(prodQuantity.innerText);
    aProd.Qunty = prodQuantity.innerText;
    this.selectedprod.push(aProd); */
  }
  selectUser(UserCode: any): void {
    this.assProToUser = new AssignProdToUser();
    alert(UserCode.innerText);
    /* this.assProToUser.AssignedUserPid = UserPID.innerText;
    this.assProToUser.lsproducts = this.selectedprod; */
  }

  OnConformDetails() {
    //we need to get assProToUser info from UI
    if (this.assProToUser.AssignedUserPid == undefined || this.assProToUser.AssignedUserPid == null ||
      this.assProToUser.lsproducts.length <= 0) {
        const modalRef = this.modalService.open(PreviewPopupComponent);
        modalRef.componentInstance.selectedUser=this.selectedUsr;
        modalRef.componentInstance.selectedProduct=this.selectedPro;
      return;
    }

    this.productService.submitAssProduct(this.assProToUser).subscribe(isitdone => this.isAssignmentCompleted = isitdone);
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
})
export class PreviewPopupComponent{
  constructor(public activeModal: NgbActiveModal) {}

   @Input() selectedUser;
   @Input() selectedProduct;
}
