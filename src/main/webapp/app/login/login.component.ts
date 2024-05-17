import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import introJs from 'intro.js';

@Component({
  standalone: true,
  selector: 'jhi-login',
  imports: [SharedModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild('username', { static: false })
  username!: ElementRef;

  introJS = introJs();

  authenticationError = signal(false);

  loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true, validators: [Validators.required] }),
  });

  private accountService = inject(AccountService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  ngOnInit(): void {
    // if already authenticated then navigate to home page
    this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['/']);
      }
    });
  }

  ngAfterViewInit(): void {
    const usernameElement = document.querySelector('[data-intro="username"]');
    if (usernameElement instanceof HTMLElement) {
      this.introJS.setOptions({
        steps: [
          {
            element: usernameElement,
            title: 'Welcome',
            intro: 'This is the username input box',
          },
        ],
      });

      // Start the introduction
      this.introJS.start();

      // Focus on the username input field after the intro finishes
      this.introJS.oncomplete(() => {
        this.username.nativeElement.focus();
      });
    } else {
      console.error('Username element not found or is not an HTMLElement.');
    }
  }

  login(): void {
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.authenticationError.set(false);
        if (!this.router.getCurrentNavigation()) {
          // There were no routing during login (eg from navigationToStoredUrl)
          this.router.navigate(['/dashboard']);
        }
      },
      error: () => this.authenticationError.set(true),
    });
  }
}
