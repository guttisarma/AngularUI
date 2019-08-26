import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../../HelperTs/User';
import { UserServiceService } from '../../../Service/user-service.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userservice: UserServiceService) { }
  userSelection: number = 0;
  userDetails: RegUser;
  selectedFile: File;
  ngOnInit() {
    this.userDetails = new RegUser();
    this.userservice.getexUser().subscribe(user => {
      this.userDetails = user;
      console.log(this.userDetails);
    });
  }
  uploadProfilePic() {
    // here we need to make server call 
    this.userservice.UpdateProfilePic( this.selectedFile).subscribe();
    console.log(this.selectedFile);
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  changeDetail(input: number) {
    console.log(input);
    this.userSelection = input;
  }

}
