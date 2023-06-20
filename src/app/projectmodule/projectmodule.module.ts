import { NgModule } from '@angular/core';
import { CommonModule, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
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
import { MatDividerModule } from '@angular/material/divider';
import { NumberGroupDirective } from '../number-group.directive';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatAccordion } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    MaindashboardComponent,
    NumberGroupDirective,
    PopsectionComponent,
  ],
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
    FormsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    MatSelectModule,
  ],
  exports: [],
})
export class ProjectmoduleModule {}
