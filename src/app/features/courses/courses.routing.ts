import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "src/app/auth/guards/authorized.guard";
import { CoursesComponent } from "./courses.component";

const appRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'add',
    loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
    pathMatch: 'full or exact',
    canLoad: []
  },
  {
    path: ':id',
    loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
    canLoad: []
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
    canLoad: []
  },
]

export const routing = RouterModule.forChild(appRoutes);
