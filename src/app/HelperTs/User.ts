export class User
{
    UserId:number;
    Name:string;
    Code:string;
    ManagerName:string;
    ManagerCode:string;
}

export class exUser
{
  constructor(){}
  strFirstName: string;
  strMiddleName: string;
  strLastName: string;
  dtDateOfBirth: string;
  strUniqueNumber: string;
}

export const MockexUser:exUser={strFirstName:"Pranab",strLastName:"Mukharji",strMiddleName:"",dtDateOfBirth:"21-09-2019",strUniqueNumber:"456890901234"}

export class exAddress
{
  strAddress1: string;
  strAddress2: string;
  strAddress3: string; 
  strCity:String;
  strState:string;
  strCountry:String;
  AddressType:string;
}
export const MockexAddress:exAddress={strAddress1:"Street 1",  strAddress2: "Street 2",  strAddress3: "Street 3",  strCity:"Bangalore",  strState:"Karnataka", strCountry:"India",AddressType:"Primary"}
export class exPhone
{
  //constructor(){}
  constructor(phnumber:string,isActive:boolean){
    this.strPhoneNumber=phnumber;
    this.bIsActive=isActive;
  }
  strPhoneNumber: string;
  bIsActive:boolean;
public static isvalidphonenumber(number:string)  {
    if(number.length>1 && number.length<12){
      if(number.startsWith('9')||number.startsWith('8') ||number.startsWith('7')||number.startsWith('6')){
        return true;
      }
    }
  return false;
}
}
export const MockexPhone:exPhone={strPhoneNumber:"8987065432",bIsActive:true}
export class exEmail
{
  strEmailId: string;
  bIsActive:boolean;
}
export const MockexEmail:exEmail={strEmailId:"Pranab.Mukharji@gmail.com",bIsActive:true}

/* export const MockUserList:User[]=[
    {Name:'william',Code:"Will092",ManagerName:'Acile',ManagerCode:'Ali232'},
    {Name:'Ashithosh',Code:"Will092",ManagerName:'Sandyirish',ManagerCode:'Ali232'},
    {Name:'Mohan',Code:"Will092",ManagerName:'Acile',ManagerCode:'Ali232'},
    {Name:'John',Code:"Will092",ManagerName:'Acile',ManagerCode:'Ali232'},
    {Name:'Chetcogambian',Code:"Will092",ManagerName:'Acile',ManagerCode:'Ali232'},
    {Name:'Rapidswiss',Code:"Will092",ManagerName:'Acile',ManagerCode:'Ali232'},
] */
export class UserIn
{
  UserId: number;
  Username:string;
  Password:string;
}

export class RegUser
  {
    public lRegUserid:number ;
    public strFirstName:string;
    public strMiddleName:string
    public strLastName:string;
    public strDob:string;
    public strAdharNumber:string;
    public bGender:boolean;
    public lsAddrssUser:AddrssUser[];

  }
export class AddrssUser
  {
    public  iAddressTypeid:number;
    public  strAddress1:string;
    public  strAddress2:string;
    public  strAddress3:string;
    public  lPhoneid:number;
    public  strPhone:string;
    public  lEmailid:number;
    public  strEmail:string;
  }