import { Routes } from '@angular/router';

import activateRoute from './activate/activate.route';
import passwordResetFinishRoute from './password-reset/finish/password-reset-finish.route';
import passwordResetInitRoute from './password-reset/init/password-reset-init.route';
import { ProfileComponent } from './profile/profile.component';
import passwordRoute from './password/password.route';
import LoginComponent from 'app/login/login.component';
import RegisterComponent from './register/register.component';
import PasswordResetInitComponent from './password-reset/init/password-reset-init.component';
import AccountComponent from './account.component';
import settingsRoute from './settings/settings.route';

const accountRoutes: Routes = [
  activateRoute,
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => [settingsRoute, passwordRoute],
  },
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'login', component: LoginComponent, data: { title: 'Login' } },
      { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
      { path: 'reset/request', component: PasswordResetInitComponent, title: 'global.menu.account.password' },
      passwordResetInitRoute,
      passwordResetFinishRoute,
    ],
  },
];

export default accountRoutes;
