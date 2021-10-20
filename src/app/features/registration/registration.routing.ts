import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration.component";

const appRoutes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
]

export const routing = RouterModule.forChild(appRoutes);
