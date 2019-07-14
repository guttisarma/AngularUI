export class ProductList
{
    ProductPID:number;
    Name:string;
    Code:string;
    Quantity:number;
    RequiredQuantity:number;
    RemQuantity:number;
    Description:string;
    CreatedOn:string;
    IsAssign:boolean;
    ParentCode:String;
    AssignedUserName:String;
    ConvertedUser:string;
    OwnerUser:string; 
}
export class AssignProduct
{
    AssignProductCode:string;
    lsProductList:ProductList[];
}
export class AssProHelper{
    ProductId:number;
    Qunty:number;
}
export class AssignProdToUser{
     lsproducts:AssProHelper[];
     AssignedUserPid:number;
}
export class PreviewPopupProList{
    ProCode:string;
    ProName:string;
    ProQuantity:string;
}
export class PreviewPopupAssignment{
    UserName:string;
   lsppprolist:PreviewPopupProList[];
}
export class Product{
    constructor(){}
    iCreProdid:number;
    strProdName:string;
    strProdCode:string;
    lQuantity:number;
    Price:number;
    lProducttypeid:number;
    strDescription:string;
    lsNotes:Array<Note>;
  }
  
  export class Note{
    subject:string;
    comment:string;
  }
export class AssignProductView{
    AssignUser:string;
    lsproduct:ProductList[];
    iscollapse:boolean;
}
