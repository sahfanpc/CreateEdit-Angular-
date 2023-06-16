import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SarviceService {
  datas: any;
  checkalert: any;
  userdatas: Array<any> = [];
  // styling: any;
  // storedEmail = localStorage.getItem('user') ;
  constructor() {}

  check(data: any) {
    const storedvalue: any = localStorage.getItem('user');
    this.datas = JSON.parse(storedvalue);

    console.log(this.datas, 'sdcdsc');
    if (this.datas && this.datas.length > 0) {
      const check1 = this.datas.filter((e: any) => e.email == data.email);
      if (check1.length != 0) {
        this.checkalert = true;
      } else {
        this.checkalert = false;
      }
      return this.checkalert;
    } else {
      console.log('no values');
    }
  }

  userdata(data: any) {
    this.userdatas.push(data);
    localStorage.setItem('user', JSON.stringify(this.userdatas));
  }

  // style(data: any) {}
}
