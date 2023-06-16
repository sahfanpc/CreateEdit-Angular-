import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DetailmoduleModule { }
