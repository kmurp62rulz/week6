import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  submit() {
    if (this.email == 'abc@com.au' && this.password =='abc' || this.email == 'chamudihs@gmail.com' && this.password =='ilovefloofer' || this.email == 'corona@virus.com' && this.password =='lockdown'){
      alert("Successful Login");
      this.router.navigateByUrl("/account");
    }
    else {alert("Email or password incorrect");}
  }

}
