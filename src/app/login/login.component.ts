import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { User, UserService } from "../user.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  // login(){
  //   console.log("Login button works.");
  //   console.log("The email is :", this.loginForm.controls.email.value);
  //   console.log("The password is :", this.loginForm.controls.password.value);
  // }

  constructor(private userService: UserService) {}

  login() {
    this.userService.authenticate(
      this.loginForm.controls.email.value || "",
      this.loginForm.controls.password.value || ""
    );
  }
}
