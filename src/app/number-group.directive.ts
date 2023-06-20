import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appNumberGroup]',
})
export class NumberGroupDirective implements OnInit {
  @Input('appNumberGroup') data: any;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.textContent = this.formatNumberGroups();
  }

  private formatNumberGroups(): string {
    const dataString = String(this.data);
    const chunkSize = 4;
    const chunks = [];

    for (let i = 0; i < dataString.length; i += chunkSize) {
      const chunk = dataString.substr(i, chunkSize);
      chunks.push(`(${chunk})`);
    }

    return chunks.join(' ');
  }
}
