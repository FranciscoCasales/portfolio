import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from '@layout/route-transition-animation';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [routeTransitionAnimations]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animationState'];
  }

}
