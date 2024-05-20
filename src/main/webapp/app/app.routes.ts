import { Routes } from '@angular/router';
import { Authority } from 'app/config/authority.constants';
import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { errorRoute } from './layouts/error/error.route';
import HomeComponent from './home/home.component';
import NavbarComponent from './layouts/navbar/navbar.component';
import LoginComponent from './login/login.component';
import RegisterComponent from './account/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: GetStartedComponent, pathMatch: 'full' }, // Redirect to login by default
    ],
  },
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
  },
  {
    path: 'admin',
    data: {
      authorities: [Authority.ADMIN],
    },
    canActivate: [UserRouteAccessService],
    loadChildren: () => import('./admin/admin.routes'),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.route'),
  },
  {
    path: '',
    loadChildren: () => import(`./entities/entity.routes`),
  },
  ...errorRoute,
];

export default routes;
