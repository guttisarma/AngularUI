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
  profilePic: string;
  ngOnInit() {
    this.userDetails = new RegUser();
    this.userservice.getexUser().subscribe(user => {
      this.userDetails = user;
	  this.profilePic = user.strRelativePicUrl;
      console.log(this.userDetails);
    });
	//this.profilePic='\\assets\\Penguins.jpg';
	//this.profilePic='\\AngularUI\\assets\\UserImage\\Hydrangeas_ebe922dd-39ff-4bb6-8b70-cb4ac78.jpg';
  }
  uploadProfilePic() {
    // here we need to make server call 
    this.userservice.UpdateProfilePic( this.selectedFile).subscribe(x=>{
		console.log(x);
		this.profilePic=x;
		console.log('this what i got from here');
		console.log(this.profilePic);
		});
    
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  changeDetail(input: number) {
    console.log(input);
    this.userSelection = input;
  }

}
