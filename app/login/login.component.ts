import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../shared/models/login-response';
import { AuthService } from '../shared/services/auth.service';

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: 'Login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private auth: AuthService, private router: Router) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/

    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSigninButtonTap(): void {
        const userName = this.username;
        const password = this.password;
        this.auth.login(userName, password).subscribe(
            (data: LoginResponse) => {
                console.log('Response', JSON.stringify(data));
                this.router.navigate(['/home']);
            },
            (error) => {},
            () => {}
        );
    }

    onForgotPasswordTap(): void {
        /* ***********************************************************
        * Call your Forgot Password logic here.
        *************************************************************/
    }
}
