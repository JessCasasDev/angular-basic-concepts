import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
})
export class HostBindingDirective {
  disabled = false;

  constructor(private element: ElementRef) {}

  @HostBinding('style.cursor') cursor!: string;
  @HostBinding('style.opacity') opacity!: string;
  @HostBinding('disabled') dis!: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.setDisabled(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setDisabled(false);
  }

  setDisabled(disabled: boolean) {
    this.disabled = disabled;
    !this.disabled && this.element.nativeElement.removeAttribute('disabled');
    
    this.opacity = disabled ? '0.4' : '1';
    
    this.cursor = disabled ? 'not-allowed' : 'pointer';
  }
}
