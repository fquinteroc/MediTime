import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  sendResetLink() {
    this.successMessage = 'Se ha enviado el código de restablecimiento al correo electrónico.';
    this.errorMessage = null;
    this.router.navigate(['/confirm-reset']);
  }
}
