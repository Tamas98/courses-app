import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: '',
    component: CourseComponent
  }
]

export const routing = RouterModule.forChild(appRoutes);
