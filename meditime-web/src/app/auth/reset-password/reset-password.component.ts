import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  sendResetLink() {
    if (!this.email) {
      this.errorMessage = 'Por favor, ingresa un correo electrónico válido.';
      this.successMessage = null;
      return;
    }

    if (this.isValidEmail(this.email)) {
      this.successMessage = 'Se ha enviado el código de restablecimiento al correo electrónico.';
      this.errorMessage = null;
    } else {
      this.errorMessage = 'El correo electrónico ingresado no es válido.';
      this.successMessage = null;
    }
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}
