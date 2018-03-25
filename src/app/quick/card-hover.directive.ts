import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'color', 'pink');
   }

   @HostListener('mouseover') onMouseOver() { 
      alert('Mouse moved over the parent div to which the directive is attached');
      this.renderer.setElementStyle(this.el.nativeElement, 'background', 'cyan');
    }

}
