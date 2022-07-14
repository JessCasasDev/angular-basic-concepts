import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight!: string;
  @Input() textColor!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'yellow');
    this.addColor(this.textColor || 'black');
  
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
    this.addColor('black');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  private addColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
