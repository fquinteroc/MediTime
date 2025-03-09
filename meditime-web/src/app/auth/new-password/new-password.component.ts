import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  resetPassword() {
    if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = null;
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = null;
      return;
    }

    if (this.newPassword.length < 8) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
      this.successMessage = null;
      return;
    }

    this.successMessage = '¡Contraseña restablecida correctamente!';
    this.errorMessage = null;
    console.log('Nueva contraseña:', this.newPassword);
  }
}
