import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";


const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

export const routing = RouterModule.forChild(appRoutes);
