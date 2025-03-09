import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-reset',
  templateUrl: './confirm-reset.component.html',
  styleUrls: ['./confirm-reset.component.css']
})
export class ConfirmResetComponent implements OnInit {

  code: string[] = ['', '', '', '', '', ''];
  timer: number = 58;
  interval: any;
  emailSentMessage: string = 'El correo electrónico se ha enviado correctamente.';
  
  constructor(private router: Router) {}

  ngOnInit() {
  }

  handleInput(event: any, index: number) {
    const value = event.target.value;
    
    if (value.length === 1 && index < this.code.length - 1) {
      const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
      if (nextInput) nextInput.focus();
    } else if (value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  }

  verifyCode() {
    const verificationCode = this.code.join('');
      console.log('Código enviado');
      alert('Código enviado correctamente');
    this.router.navigate(['/new-password']);
  }

  resendCode() {
    if (this.timer === 0) {
      console.log('Reenviando código...');
      this.timer = 58;
      alert('Código reenviado correctamente');
    }
  }
}
