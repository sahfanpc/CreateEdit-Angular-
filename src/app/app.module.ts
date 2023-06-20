import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MaindashboardComponent } from './projectmodule/maindashboard/maindashboard.component';
// import { NumberGroupDirective } from './number-group.directive';
import { ProjectmoduleModule } from './projectmodule/projectmodule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    ProjectmoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
