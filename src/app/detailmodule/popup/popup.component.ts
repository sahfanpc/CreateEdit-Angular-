import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, RouterLink],
})
export class PopupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
