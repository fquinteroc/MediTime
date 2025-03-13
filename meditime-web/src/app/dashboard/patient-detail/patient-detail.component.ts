import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent {
  patientName: string = 'José Ramirez';
  adherencePercentage: number = 95;

  constructor(private router: Router) {}

  goBack() {
    console.log('Volver a listado de pacientes');
    this.router.navigate(['/patients-list']);
  }

  generateReport() {
    console.log('Generar reporte');
    alert('Generando reporte...');
  }

  viewMedicationList() {
    console.log('Ver lista de medicamentos');
    this.router.navigate(['/medication-list']);
  }

  registerMedication() {
    console.log('Registrar medicamentos');
    this.router.navigate(['/register-medication']);
  }

  logout() {
    console.log('Cerrar sesión');
    this.router.navigate(['/']);
  }
}
