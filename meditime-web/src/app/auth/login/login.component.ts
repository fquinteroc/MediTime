import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private router: Router) {}

  login() {
    this.router.navigate(['/patients-list']);

  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }

  goToCreateAccount() {
    this.router.navigate(['/new-account']);
  }
}
