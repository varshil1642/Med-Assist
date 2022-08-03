import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: User = {
    usertype: '',
    username: '',
    email: '',
    password: '',
    otp: ''
  }
  
  isHiddenotp: boolean = true;
  isClickedotp: boolean = false;
  registerUser = () => {
    this.auth.registerUser(this.registerUserData).subscribe(
      res => console.log(res),
      err => console.log(err)
    );
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
