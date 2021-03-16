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

  public screenWidth: number;
  public screenHeight: number;

  constructor() { }

  ngOnInit(): void {
    this.getWindowSize();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

  private getWindowSize() {
    fromEvent(window, 'resize').subscribe(this.updateWindowSize);

    this.screenWidth = document.documentElement.clientWidth;
    this.screenHeight = document.documentElement.clientHeight;
  }

  private updateWindowSize = (event) => {
    this.screenWidth = event.target.document.documentElement.clientWidth;
    this.screenHeight = event.target.document.documentElement.clientHeight;
  }

}
