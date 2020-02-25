import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {}
  constructor(private _auth: AuthService,
    private _router: Router) { }

  ngOnInit() {

    $(document).ready(function () {

      $('#btn-submit').click(function () {

        $(".error").hide();
        var hasError = false;

        var emailaddressVal = $("#UserEmail").val();
        var pas = $("#UserPassword").val();
        if (emailaddressVal == '') {
          $("#UserEmail").after('<span class="error">Please enter your email address.</span>');
          hasError = true;
        }
        else if (pas == '') {
          $("#UserPassword").after('<span class="error">Please enter your password.</span>');
          hasError = true;
        }

        if (hasError == true) { return false; }

      });

    });
  }
  loginUser() {
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/books'])
        },
        err => console.log(err)
      )






  }

}
