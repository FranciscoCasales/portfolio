import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';
import { element } from 'protractor';

const BORDER = 3;

@Directive({
  selector: '[dragDrop]'
})
export class DragDropDirective implements AfterViewInit {

  private sliderSize: number;
  private leftOffset: number;
  private sliderWrapper: HTMLElement;
  private percentageIndicator: HTMLElement;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.percentageIndicator = this.elementRef.nativeElement;
    this.sliderWrapper = this.percentageIndicator.parentElement;
    this.sliderSize = this.sliderWrapper.clientWidth;
    this.leftOffset = this.sliderWrapper.getBoundingClientRect().left;
  }

  @HostListener('mousedown', ['$event'])
  onClick(element: MouseEvent) {
    const percentage = 100 *
      ((element.clientX - this.leftOffset - element.offsetX - BORDER) / this.sliderSize);
    console.log('slider     ------->', this.sliderSize);
    console.log('percentage ------->', percentage.toFixed(1));
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(el) {
    console.log(el);
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(el) {
    console.log(el);
  }

  @HostListener('window:resize')
  onResize() {
    this.sliderSize = this.sliderWrapper.clientWidth;
    this.leftOffset = this.sliderWrapper.getBoundingClientRect().left;
  }

}
