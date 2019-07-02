import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ProductService} from '../../product.service';
import {UserServiceService} from 'src/app/Service/user-service.service';
import { ProductList,AssignProdToUser,PreviewPopupProList,PreviewPopupAssignment } from 'src/app/HelperTs/ProductList';
import { User} from 'src/app/HelperTs/User';


@Component({
  selector: 'app-assign-product',
  templateUrl: './assign-product.component.html',
  styleUrls: ['./assign-product.component.css']
})
export class AssignProductComponent implements OnInit {

  constructor(private productService:ProductService,
          private userService:UserServiceService,
          public dialog: MatDialog) { }
  proCodeKey:string;
  userCodeKey:string;
  Ulist:User[]=[];
  Plist:ProductList[]=[];
  assProToUser:AssignProdToUser;
  isAssignmentCompleted:boolean;
  ngOnInit() {

    this.productService.getProductList().subscribe(lsProduct=>this.Plist=lsProduct);
    this.userService.getMyUsers().subscribe(lsusers=>this.Ulist=lsusers);
  }
  InfoPopUp():void{
    alert("User popup appreas here");
    const dialogRef = this.dialog.open(PreviewPopup, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  OnConformDetails(){
    //we need to get assProToUser info from UI
    
    this.productService.submitAssProduct(this.assProToUser).subscribe(isitdone=>this.isAssignmentCompleted=isitdone);
  }
  searchProductCode(){
   // this.productService.getMockSearchPCode(this.proCodeKey).subscribe(prolist=>this.Plist.push(prolist))
  }
  searchUserCode(){
      this.userService.getUserbyCode(this.userCodeKey).subscribe(userlist=>this.Ulist.push(userlist))
  }
}
 //For popup Opening
 @Component({
  selector: 'preview-popup',
  templateUrl: 'preview-popup.html',
})
export class PreviewPopup{
  constructor(
    public dialogRef: MatDialogRef<PreviewPopup>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
