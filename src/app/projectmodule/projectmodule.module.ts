import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopsectionComponent } from './popsection/popsection.component';

@NgModule({
  declarations: [MaindashboardComponent, PopsectionComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatLabel,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProjectmoduleModule {}
