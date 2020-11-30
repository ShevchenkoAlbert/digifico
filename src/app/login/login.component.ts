import { User } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|((\w[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i
                    ),
                ],
            ],
            password: ['', [Validators.required]],
        });
    }

    isControlInvalid(controlName: string): boolean {
        const control = this.loginForm.controls[controlName];
        const result = control.invalid && (control.touched || control.touched);

        return result;
    }

    get email() {
        return this.loginForm.get('email');
    }
    get password() {
        return this.loginForm.get('password');
    }

    login() {
        if (this.loginForm.invalid) {
            return;
        }

        this.authService.login(this.loginForm.value)
            .subscribe((response: boolean) => {
                if (response) {
                    return this.router.navigate(['/articles']);
                } else {
                    alert('Login failed: wrong email or password');
                }

            });
    }
}
