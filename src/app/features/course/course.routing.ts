import { RouterModule, Routes } from "@angular/router";
import { CourseComponent } from "./course.component";

const appRoutes: Routes = [
  {
    path: '',
    component: CourseComponent
  }
]

export const routing = RouterModule.forChild(appRoutes);
