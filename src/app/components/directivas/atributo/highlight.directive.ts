import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  @Input() textColor!: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
    this.addColor(this.textColor || 'black');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.addColor('black');
  }

  private highlight(color: string) {
    //this.el.nativeElement.style.backgroundColor = color;
    this.render.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private addColor(color: string) {
    this.render.setStyle(this.el.nativeElement, 'color', color);
    //this.el.nativeElement.style.color = color;
  }
}
