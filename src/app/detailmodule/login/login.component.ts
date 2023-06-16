import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SarviceService } from 'src/app/sarvice.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class LoginComponent implements OnInit {
  displayemail: any;
  popup: boolean = false;
  current: boolean = true;
  signform = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });
  registerform = this.fb.group({
    email: ['', [Validators.required]],
    username: ['', [Validators.required]],
    number: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private db: SarviceService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  Login(data: any) {
    console.log(data, 'a');
    if (this.signform.valid) {
      this.displayemail = data;
      const check = this.db.check(data);
      if (check) {
        this.dialog.open(PopupComponent);
      } else {
        console.log('The email is not included in localStorage.');
        this.current = false;
        this.popup = true;
      }
    } else {
      alert('not valid');
    }
  }
  Register(data: any) {
    if (this.registerform.valid) {
      this.db.userdata(data);
      // localStorage.setItem('user', JSON.stringify(data));
      this.router.navigateByUrl('dashboard');
    } else {
      alert('not valid');
    }
  }
}
