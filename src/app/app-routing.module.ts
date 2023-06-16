import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './detailmodule/login/login.component';
import { DashboardComponent } from './detailmodule/dashboard/dashboard.component';
import { PopupComponent } from './detailmodule/popup/popup.component';
import { MaindashboardComponent } from './projectmodule/maindashboard/maindashboard.component';
import { PopsectionComponent } from './projectmodule/popsection/popsection.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'popup', component: PopupComponent },
  { path: 'maindashboard', component: MaindashboardComponent },
  { path: 'popsection', component: PopsectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
