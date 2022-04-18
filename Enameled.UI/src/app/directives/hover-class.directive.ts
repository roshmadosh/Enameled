import { Directive, ElementRef, HostListener } from "@angular/core";

/**
 *  Directive for adding a "hover" css class that applies highlighting to the element.
 *  Usage: include hover-class as a property of the element in a template.
 */

@Directive({
  selector: '[hover-class]'
})
export class HoverClassDirective {
  constructor(public elementRef: ElementRef){}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add('hover');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove('hover');
  }
}