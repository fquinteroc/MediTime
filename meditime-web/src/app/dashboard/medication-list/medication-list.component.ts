import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medication-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent {

  constructor(private router: Router) {}
  patientName = 'José Ramírez';

  medications = Array(9).fill({
    name: 'Metformina 250 mg',
    dose: '1 Tableta',
    startDate: '01/02/2020',
    endDate: '13/05/2024',
    frequency: 'Diario',
    use: 'Oral',
    status: 'Sin completar'
  });

  goBack() {
    this.router.navigate(['/patient-detail']);
  }
  registerMedication() {
    this.router.navigate(['/register-medication']);
  }
  editMedication(medication: any) {}
  deleteMedication(medication: any) {}
  logout() {
    this.router.navigate(['/']);
  }
}
