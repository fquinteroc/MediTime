import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-account',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  email: string = '';
  fullName: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  successMessage: string | null = null;
  errorMessage: string | null = null;

  createAccount() {
    // Validaciones básicas
    if (!this.email || !this.fullName || !this.phone || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = null;
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      this.successMessage = null;
      return;
    }

    if (this.password.length < 8) {
      this.errorMessage = 'La contraseña debe tener al menos 8 caracteres.';
      this.successMessage = null;
      return;
    }

    // Simulación de éxito
    this.successMessage = '¡Cuenta creada exitosamente!';
    this.errorMessage = null;
    console.log('Nueva cuenta creada:', {
      email: this.email,
      fullName: this.fullName,
      phone: this.phone,
      password: this.password
    });
  }

  login() {
    console.log('Redirigiendo a la página de inicio de sesión...');
    // Simulación de navegación a la página de inicio de sesión
  }
}
