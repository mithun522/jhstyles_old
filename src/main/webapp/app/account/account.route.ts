import { Routes } from '@angular/router';

import activateRoute from './activate/activate.route';
import passwordResetFinishRoute from './password-reset/finish/password-reset-finish.route';
import passwordResetInitRoute from './password-reset/init/password-reset-init.route';
import { ProfileComponent } from './profile/profile.component';
import settingsRoute from './settings/settings.route';
import passwordRoute from './password/password.route';

const accountRoutes: Routes = [
  activateRoute,
  passwordResetFinishRoute,
  passwordResetInitRoute,
  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => [settingsRoute, passwordRoute],
  },
];

export default accountRoutes;
