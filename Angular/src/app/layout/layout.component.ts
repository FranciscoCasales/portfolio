import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '@layout/route-transition-animation';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeTransitionAnimations]
})
export class LayoutComponent implements OnInit {

  private screenWidth: number;
  private screenHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.getWindowSize();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

  private getWindowSize() {
    fromEvent(window, 'resize').subscribe(event => console.log(event));

    this.screenWidth = window.screen.width;
    this.screenHeight = window.screen.height;
    console.log('Screen width --------------->', this.screenWidth);
    console.log('Screen height -------------->', this.screenHeight);
  }

}
