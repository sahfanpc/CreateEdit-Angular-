import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass, NgForOf, NgIf, NgStyle } from '@angular/common';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { PopsectionComponent } from '../popsection/popsection.component';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.scss'],
  standalone: true,
  imports: [
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
    NgStyle,
    MatDialogModule,
    NgForOf,
    MatDividerModule,
    MatListModule,
    NgIf,
    NgClass,
  ],
})
export class MaindashboardComponent implements OnInit {
  panelOpenState = false;
  vediooary:Array<any>=[];
  textary:Array<any>=[];
  imageary:Array<any>=[];
  data: any;
  designcolor: any;
  designsize: any;
  designweight: any;
  designstrock: any;
  column: any;
  padding: any;
  divider1: boolean = false;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  submitform = this.fb.group({
    data: ['', Validators.required],
    color: [''],
    fontsize: [''],
    fontweight: [''],
    textstrock: [''],
  });

  ngOnInit(): void {
  }
  // ngstyle......................
  // getStyleObject() {
  //     return{
  //       color:this.textary[i].color
  //     }
  // }
  // vediostyle() {
  //   return {
  //     width: this.vdowidth,
  //     height: this.vdoheight,
  //   };
  // }
  Submit(value: any) {
    console.log(this.textary);
    // this.data = value.data;
    this.textary.push(value);
// for(let i=0;i<this.textary.length;i++){
//   this.designcolor=this.textary[i].color;
// }

    this.designsize=value.fontsize;
    this.designweight=value.fontweight;
    this.designstrock=value.textstrock;

  }
  // Check(data: any) {
  //   console.log(data, 'set');
  //   this.designcolor = data.color;
  //   this.designsize = data.fontsize;
  //   this.designweight = data.fontweight;
  //   this.designstrock = data.textstrock;
  //   // console.log(this.designvalue.color);
  // }
  imageStyle(): void {
    const dialogRef = this.dialog.open(PopsectionComponent, {
      data: 'image',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      if (result) {

        this.imageary.push(result);
        console.log(this.imageary);
        
      }
    });
  }
  vedioStyle() {
    const dialogRef = this.dialog.open(PopsectionComponent, {
      data: 'vedio',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed ');

      if (result) {
        // console.log(result,"result");
        
        this.vediooary.push(result)
        console.log(this.vediooary, 'vdooo');

      }
    });
  }
  getStyles() {
    return {
      'flex-direction': this.column,
      padding: this.padding,
    };
  }
  flexcolumn() {
    this.column = 'column';
    this.padding = '2rem';
    console.log(this.column);
  }
  flexrow() {
    this.column = 'row';
    this.padding = '1rem';
    console.log(this.column);
  }
  divider() {
    this.divider1 = !this.divider1;
  }
}
