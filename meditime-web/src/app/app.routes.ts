import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ConfirmResetComponent } from './auth/confirm-reset/confirm-reset.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { NewAccountComponent } from './auth/new-account/new-account.component';
import { PatientsListComponent } from './dashboard/patients-list/patients-list.component';
import { PatientDetailComponent } from './dashboard/patient-detail/patient-detail.component';
import { MedicationListComponent } from './dashboard/medication-list/medication-list.component';
import { RegisterMedicationComponent } from './dashboard/register-medication/register-medication.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent
  },
  {
    path: 'confirm-reset',
    component: ConfirmResetComponent
  },
  {
    path: 'new-password',
    component: NewPasswordComponent
  },
  {
    path: 'new-account',
    component: NewAccountComponent
  },
  {
    path: 'patients-list',
    component: PatientsListComponent
  },
  {
    path: 'patient-detail',
    component: PatientDetailComponent
  },
  {
    path: 'medication-list',
    component: MedicationListComponent
  },
  {
    path: 'register-medication',
    component: RegisterMedicationComponent
  }
];
