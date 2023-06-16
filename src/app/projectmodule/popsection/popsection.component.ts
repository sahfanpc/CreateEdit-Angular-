import { Component, OnInit, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
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
  ],
})
export class PopsectionComponent implements OnInit {
  constructor(
    private router: Router,
    private db: SarviceService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MaindashboardComponent> // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  // submitform = this.fb.group({
  //   imgurl: ['', Validators.required],
  // });
  ngOnInit(): void {}
  // submit(data: any) {
  // console.log(data);

  // this.db.style(data);
  // }
}
