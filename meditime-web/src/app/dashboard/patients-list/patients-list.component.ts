import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Patient {
  name: string;
  age: number;
  diagnosis: string;
}

@Component({
  imports: [FormsModule, CommonModule],
  standalone: true,
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: Patient[] = [
    { name: 'José Ramirez', age: 80, diagnosis: 'Diabetes' },
    { name: 'Maria Rodriguez', age: 75, diagnosis: 'Hipertensión' },
    { name: 'Luis Gonzalez', age: 63, diagnosis: 'Asma' },
    { name: 'Ana Pérez', age: 85, diagnosis: 'Epilepsia' },
    { name: 'Gloria Rojas', age: 55, diagnosis: 'Alzheimer' },
    { name: 'Manuel Vargas', age: 68, diagnosis: 'Parkinson' },
    { name: 'Carmen Castro', age: 81, diagnosis: 'Cardiopatía' },
    { name: 'Andres Perea', age: 75, diagnosis: 'Diabetes' },
    { name: 'Maria Rojas', age: 80, diagnosis: 'Asma' }
  ];

  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 10;

  constructor(private router: Router) {} 

  ngOnInit(): void {}

  searchPatients() {
    console.log('Buscando:', this.searchTerm);
    // Lógica para buscar pacientes (pendiente de implementación)
  }

  addPatient() {
    console.log('Agregar nuevo paciente');
    // Lógica para agregar paciente (pendiente de implementación)
  }

  editPatient(patient: Patient) {
    console.log('Editar paciente:', patient);
    // Lógica para editar paciente (pendiente de implementación)
  }

  deletePatient(patient: Patient) {
    console.log('Eliminar paciente:', patient);
    this.patients = this.patients.filter(p => p !== patient);
  }

  viewPatient(patient: Patient) {
    this.router.navigate(['/patient-detail']);
    // Lógica para ver detalles (pendiente de implementación)
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  logout() {
    this.router.navigate(['/']);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
