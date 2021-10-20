import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "src/app/auth/guards/authorized.guard";
import { CourseDetailsComponent } from "../course/course-details/course-details.component";
import { CreateCourseComponent } from "../course/create-course/create-course.component";
import { EditCourseComponent } from "../course/edit-course/edit-course.component";
import { CoursesComponent } from "./courses.component";

const appRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    pathMatch: 'full or exact',
    canLoad: []
  },
  {
    path: 'add',
    component: CreateCourseComponent,
    pathMatch: 'full or exact',
    canLoad: []
  },
  {
    path: ':id',
    component: CourseDetailsComponent,
    canLoad: []
  },
  {
    path: 'edit/:id',
    component: EditCourseComponent,
    canLoad: []
  },
]

export const routing = RouterModule.forChild(appRoutes);
