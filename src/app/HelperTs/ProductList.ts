export class ProductList
{
    Name:string;
    Code:string;
    Quantity:Number;
    RemQuantity:Number;
    Description:string;
    CreatedOn:string;
    IsAssign:boolean;
    /* ParentCode:String;
    AssignedUserName:String;
    ConvertedUser:string;
    OwnerUser:string; */
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

export const MockProductList:ProductList[]=[
    {Name:'Product 1',Code:'Pro_code_1',Quantity:12,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 2',Code:'Pro_code_1436',Quantity:64,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 46',Code:'Pro_code_123454',Quantity:45,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 2234',Code:'Pro_code_2351',Quantity:86,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 45',Code:'Pro_code_5441',Quantity:343,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 566',Code:'Pro_code_6221',Quantity:235,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 56673',Code:'Pro_code_565341',Quantity:3422,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 3423523',Code:'Pro_code_3461',Quantity:2341,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true},
    {Name:'Product 24566',Code:'Pro_code_2351',Quantity:223,RemQuantity:89,Description:'',CreatedOn:'2018-09-08',IsAssign:true}
    
]

/* export const MockAssignProduct:AssignProduct[]=[{AssignProductCode:'ASSIGNCODE1',lsProductList:[{Name:'Product 24566',Code:'Pro_code_2351',Quantity:223,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
ParentCode:'',AssignedUserName:'',ConvertedUser:'',OwnerUser:''},{Name:'Product 3423523',Code:'Pro_code_3461',Quantity:2341,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
ParentCode:'',AssignedUserName:'',ConvertedUser:'',OwnerUser:''}]},
                                                {AssignProductCode:'ASSIGNCODE2',lsProductList:[{Name:'Product 24566',Code:'Pro_code_2351',Quantity:223,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
                                                ParentCode:'',AssignedUserName:'',ConvertedUser:'',OwnerUser:''},{Name:'Product 3423523',Code:'Pro_code_3461',Quantity:2341,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
                                                ParentCode:'',AssignedUserName:'',ConvertedUser:'',OwnerUser:''}]}]
 
export const MockAssProductList:ProductList[]=[
    {Name:'Product 1',Code:'Pro_code_1',Quantity:12,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_1',AssignedUserName:'Known',ConvertedUser:'Rio',OwnerUser:'George'},
    {Name:'Product 2',Code:'Prde_14',Quantity:64,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_1436',AssignedUserName:'UnKnown',ConvertedUser:'Sew',OwnerUser:'Jio'},
    {Name:'Product 46',Code:'Pro_code_123454',Quantity:45,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_123454',AssignedUserName:'Jar',ConvertedUser:'Skwe',OwnerUser:'Rehin'},
    {Name:'Product 2234',Code:'Pro_code_2351',Quantity:86,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_2351',AssignedUserName:'Taz',ConvertedUser:'Rem',OwnerUser:'Rewe'},
    {Name:'Product 45',Code:'Pro_code_5441',Quantity:343,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_5441',AssignedUserName:'Ref',ConvertedUser:'Ster',OwnerUser:'Tony'},
    {Name:'Product 566',Code:'Pro_code_6221',Quantity:235,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_6221',AssignedUserName:'Lio',ConvertedUser:'Emma',OwnerUser:'Staf'},
    {Name:'Product 56673',Code:'Pro_code_565341',Quantity:3422,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Pro_code_565341_Parent',AssignedUserName:'Meh',ConvertedUser:'Lya',OwnerUser:'Lava'},
    {Name:'Product 3423523',Code:'Pro_code_3461',Quantity:2341,Description:'Jil',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_3461',AssignedUserName:'Worg',ConvertedUser:'Soma',OwnerUser:'Mat'},
    {Name:'Product 24566',Code:'Pro_code_2351',Quantity:223,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_2351',AssignedUserName:'Sre',ConvertedUser:'Nata',OwnerUser:'Hyem'}
    
]

export const MockConProductList:ProductList[]=[
    {Name:'Product 1',Code:'Pro_code_1',Quantity:12,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_1',AssignedUserName:'Known',ConvertedUser:'Rio',OwnerUser:'George'},
    {Name:'Product 2',Code:'Pro_code_1436',Quantity:64,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_1436',AssignedUserName:'UnKnown',ConvertedUser:'Sew',OwnerUser:'Jio'},
    {Name:'Product 46',Code:'Pro_code_123454',Quantity:45,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_123454',AssignedUserName:'Jar',ConvertedUser:'Skwe',OwnerUser:'Rehin'},
    {Name:'Product 2234',Code:'Pro_code_2351',Quantity:86,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_2351',AssignedUserName:'Taz',ConvertedUser:'Rem',OwnerUser:'Rewe'},
    {Name:'Product 45',Code:'Pro_code_5441',Quantity:343,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_5441',AssignedUserName:'Ref',ConvertedUser:'Ster',OwnerUser:'Tony'},
    {Name:'Product 566',Code:'Pro_code_6221',Quantity:235,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_6221',AssignedUserName:'Lio',ConvertedUser:'Emma',OwnerUser:'Staf'},
    {Name:'Product 56673',Code:'Pro_code_565341',Quantity:3422,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Pro_code_565341_Parent',AssignedUserName:'Meh',ConvertedUser:'Lya',OwnerUser:'Lava'},
    {Name:'Product 3423523',Code:'Pro_code_3461',Quantity:2341,Description:'Jil',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_3461',AssignedUserName:'Worg',ConvertedUser:'Soma',OwnerUser:'Mat'},
    {Name:'Product 24566',Code:'Pro_code_2351',Quantity:223,Description:'',CreatedOn:'2018-09-08',IsAssign:true,
    ParentCode:'Parent_Pro_code_2351',AssignedUserName:'Sre',ConvertedUser:'Nata',OwnerUser:'Hyem'}
    
]*/