import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  resetPassword() {
    this.successMessage = '¡Contraseña restablecida correctamente!';
    // this.errorMessage = null;
    // console.log('Nueva contraseña:', this.newPassword);
    this.router.navigate(['/']);
  }
}
