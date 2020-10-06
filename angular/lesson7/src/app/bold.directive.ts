import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    // console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
