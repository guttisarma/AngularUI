import { Component,OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.PreProd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularUI';
  person:Person=new Person();
  uniqueID:string='uniqueID';
  AddressType:string='AddressType';
  UserList:string='UserList';
  //NewUser person=new NewUser();
  closeResult: string;
  selectedEnv:string=environment.name;
  IsUserLogIn:boolean=false;

  ngOnInit() {
    if(localStorage.getItem("AuthToken")!=undefined || localStorage.getItem("AuthToken")!=null)
      this.IsUserLogIn=true;
      else
      this.IsUserLogIn=false;
}

logout(){
  localStorage.setItem("AuthToken",undefined);
  this.IsUserLogIn=false;
}
 
  //person.startDate = new Date(1990, 0, 1);
}

export class Person
{
  firstname: string;
  middlename: string;
  lastname: string;
  dateofbirth: string;
  uniquenumber: string;
  address1: string;
  address2: string;
  address3: string;
  phonenumber: string;
  emailid: string; 
}
class NewUser{
  firstname: string;
  middlename: string;
  lastname: string;
  dateofbirth: string;
  uniquenumber: string;
  address1: string;
  address2: string;
  address3: string;
  phonenumber: string;
  emailid: string;
}
