import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, tap } from 'rxjs/operators';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  public isLoading = false;

  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService.login(
        this.loginForm.controls.email.value,
        this.loginForm.controls.password.value
      )
        .pipe(
          tap(() => this.isLoading = false),
        )
        .subscribe(
          () => this.router.navigate(['admin']),
          () => {
            this.errorMessage = "Echec de l'authentification"
            this.isLoading = false;
          }
        );
    }
  }

}
