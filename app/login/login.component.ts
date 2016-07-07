/**
 * Created by NetSri on 01/07/2016.
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';

@Component({
    selector: 'my-app-login',
    templateUrl: './app/login/login.component.html',
    styleUrls:['./app/login/login.component.css'],
})
export class LoginComponent {
    loginForm:any;
    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }
    doLogin(event) {
        if (this.loginForm.dirty && this.loginForm.valid) {
            //console.log(this.loginForm.value);
            alert(`Password: ${this.loginForm.value.password} Email: ${this.loginForm.value.email}`);
        }
       
        event.preventDefault();
    }



}
