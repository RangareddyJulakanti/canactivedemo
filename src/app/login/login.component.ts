import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'Ranga';
  password = '';
  loginCredentials = false;
  errorMessage = 'InvalidCredentials';
  router: Router;
  hardcodedAuthenticationService: HardcodedAuthenticationService;

  constructor(router: Router , hardcodedAuthenticationService: HardcodedAuthenticationService) {
    this.router = router;
    this.hardcodedAuthenticationService = hardcodedAuthenticationService;
  }

  ngOnInit() {
  }
  handleLogin() {
    console.log(this.userName)
    console.log(this.password)
    if (this.hardcodedAuthenticationService.authenticate(this.userName,this.password)) {
      this.loginCredentials = false;
      this.router.navigate(['welcome', this.userName]);
    } else {
      this.loginCredentials = true;
      //this.router.navigate(['error'])
    }
  }
}
