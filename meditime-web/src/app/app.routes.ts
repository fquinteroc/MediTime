import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ConfirmResetComponent } from './auth/confirm-reset/confirm-reset.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';
import { NewAccountComponent } from './auth/new-account/new-account.component';

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
    }
];
