import { Component, OnInit, Inject, TemplateRef } from '@angular/core';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material/dialog';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SarviceService } from 'src/app/sarvice.service';
import { MaindashboardComponent } from '../maindashboard/maindashboard.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-popsection',
  templateUrl: './popsection.component.html',
  styleUrls: ['./popsection.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    NgSwitch,
    NgSwitchCase,
    NgIf,
    MatSelectModule,
  ],
})
export class PopsectionComponent implements OnInit {
  image: any;
  width: any;
  height: any;
  unit: any;
  vedio: any;
  checkdata: any;

  constructor(
    private router: Router,
    private db: SarviceService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MaindashboardComponent>, // @Inject(MAT_DIALOG_DATA) public data: DialogData
    @Inject(MAT_DIALOG_DATA) public data: 'data'
  ) {
    this.checkdata = data;
    console.log(this.checkdata);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
