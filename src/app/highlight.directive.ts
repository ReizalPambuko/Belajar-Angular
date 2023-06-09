import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = ""
  @Input() default = ""

  constructor(private el: ElementRef) {
   }

   
   @HostListener('mouseenter') onMouseEnter(){
      this.highlight(this.appHighlight || this.default ||'pink')
   }


   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('')
   }

   highlight(color:string){
      this.el.nativeElement.style.backgroundColor = color
   }

}
