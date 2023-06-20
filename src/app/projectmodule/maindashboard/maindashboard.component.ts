import {
  Component,
  OnInit,
  ViewChild,
  Inject,
  TemplateRef,
} from '@angular/core';
import { NumberGroupDirective } from '../../number-group.directive';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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
  template: ` <div [appNumberGroup]="datanumber"></div> `,
})
export class MaindashboardComponent implements OnInit {
  panelOpenState = false;
  datanumber: any;
  vediooary: Array<any> = [];
  textary: Array<any> = [];
  imageary: Array<any> = [];
  profileary: Array<any> = [];
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

  ngOnInit(): void {}
  // ngstyle......................
  // getStyleObject() {
  //     return{
  //       color:this.textary[i].color
  //     }
  // }

  Submit(value: any) {
    console.log(this.textary);
    this.textary.push(value);

    this.designsize = value.fontsize;
    this.designweight = value.fontweight;
    this.designstrock = value.textstrock;
  }
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

        this.vediooary.push(result);
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

  Deletetext(number: any) {
    console.log(number, 'text');
    this.textary.splice(number, 1);
  }
  Deleteimg(number: any) {
    console.log(number, 'img');
    this.imageary.splice(number, 1);
  }
  Deletevdo(number: any) {
    console.log(number, 'vdo');
    this.vediooary.splice(number, 1);
  }
  Profile() {
    const dialogRef = this.dialog.open(PopsectionComponent, {
      data: 'profile',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed');
      if (result) {
        this.profileary.push(result);
        this.datanumber = result.number;
        console.log(this.profileary);
      }
    });
  }
  Close(number: any) {
    this.profileary.splice(number, 1);
  }
}
