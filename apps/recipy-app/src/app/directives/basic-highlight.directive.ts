import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[orgBasicHighlight]',

})
export class BasicHighlightDirective {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLDivElement>,
  ) {

    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'blue')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white')


  }
}
