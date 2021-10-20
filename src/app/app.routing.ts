import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "src/app/auth/guards/authorized.guard";
import { NonAuthorizedGuard } from "src/app/auth/guards/non-authorized.guard";

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
    canActivate: [NonAuthorizedGuard]
  },
  {
    path: 'registration',
    loadChildren: () => import('./features/registration/registration.module').then(m => m.RegistrationModule),
    canActivate: [NonAuthorizedGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule),
    canLoad: [AuthorizedGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'courses'
  }
]

export const routing = RouterModule.forRoot(appRoutes);
