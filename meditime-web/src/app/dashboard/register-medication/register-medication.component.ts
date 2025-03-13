import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  selector: 'app-register-medication',
  templateUrl: './register-medication.component.html',
  styleUrls: ['./register-medication.component.css']
})
export class RegisterMedicationComponent {
  medicationForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.medicationForm = this.fb.group({
      medicationName: ['', Validators.required],
      concentration: ['', Validators.required],
      dose: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      frequency: ['', Validators.required],
      administrationRoute: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.medicationForm.valid) {
      this.router.navigate(['/medication-list']);
    }
  }

  cancel() {
    console.log('Cancelado');
    this.router.navigate(['/medication-list']);
  }

  save() {
    console.log('Guardado');
    this.router.navigate(['/medication-list']);
  }

}
