import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  message = "";
  errorMessage = "";
  error: {
    name: string,
    message: string
  } = { name: "", message: "" }

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' }
  }

  login() {

    this.clearErrorMessage()

    if (this.valifateForm(this.email, this.password)) {
      this.authservice.loginWithEmail(this.email, this.password).then(() => {
        this.router.navigate(['/dashboard'])
      }).catch(_error => {
        this.error = _error;
        this.router.navigate(['/registration'])
      })
    }
  }

  valifateForm(email, password) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email'
      return false
    }
    if (password.length === 0) {
      this.errorMessage = 'please enter password'
      return false
    }
    if (password.length < 6) {
      this.errorMessage = ' > 6 symbols'
      return false
    }
    this.errorMessage = '';
    return true;
  }
}
