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
  vedioary: Array<any> = [];
  data: any;
  designcolor: any;
  designsize: any;
  designweight: any;
  designstrock: any;
  imgurl: any;
  imgwidth: any;
  imgheight: any;
  vdourl: any;
  vdowidth: any;
  vdoheight: any;
  // vdourl: any;
  // vdowidth: any;
  // vdoheight: any;
  column: any;
  padding: any;
  divider1: boolean = false;
  // color1: any;
  // fontsize1: any;/
  // fontweight1: any;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}
  submitform = this.fb.group({
    data: ['', Validators.required],
  });

  styleform = this.fb.group({
    color: [''],
    fontsize: [''],
    fontweight: [''],
    textstrock: [''],
  });

  ngOnInit(): void {
    this.getStyleObject();
    //  this. pushfunction();
    // console.log(this.data.value);
  }
  // pushfunction() {

  //       const value = {
  //         vdourl: this.vdourl,
  //         vdowidth: this.vdowidth,
  //         vdoheight: this.vdoheight
  //   };
  //   this.vedioary.push(value)
  // }
  getStyleObject() {
    return {
      color: this.designcolor,
      'font-size': this.designsize, // Example: setting font size to 18px
      'font-weight': this.designweight,
      '-webkit-text-stroke': this.designstrock,

      // Example: setting background color to blue
    };
  }
  imgstyle() {
    return {
      width: this.imgwidth,
      height: this.imgheight,
    };
  }
  vediostyle() {
    return {
      width: this.vedioary,
      height: this.vedioary,
    };
  }
  Submit(value: any) {
    console.log(value.data);
    this.data = value.data;
  }
  Check(data: any) {
    console.log(data, 'set');
    this.designcolor = data.color;
    this.designsize = data.fontsize;
    this.designweight = data.fontweight;
    this.designstrock = data.textstrock;
    // console.log(this.designvalue.color);
  }
  imageStyle(): void {
    const dialogRef = this.dialog.open(PopsectionComponent, {
      data: 'image',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      if (result) {
        const img = result;
        console.log(img);

        this.imgurl = img.image;
        this.imgwidth = img.width + img.unit;
        this.imgheight = img.height + img.unit;

        console.log(this.imgurl.image);
        console.log(this.imgwidth);
      }
    });
  }
  vedioStyle() {
    const dialogRef = this.dialog.open(PopsectionComponent, {
      data: 'vedios',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      if (result) {
        const vdo = result;
        this.vdourl = vdo.vedio;
        this.vdowidth = vdo.width + vdo.unit;
        this.vdoheight = vdo.height + vdo.unit;
        // console.log(this.imgurl.image);
        console.log(vdo, 'vdo');

        // const value = {
        //   vdourl: vdo.vedio,
        //   vdowidth: vdo.width + vdo.unit,
        //   vdoheight: vdo.height + vdo.unit,
        // };
        // this.vedioary.push(value);
        // console.log(this.vedioary, 'array');

        // console.log(value, 'aaaa');
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
