import { Component } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  public isHome = false;

  constructor(private router: Router) {
    this.validateRoute();
  }

  private validateRoute = () => {
    this.router.events.pipe(
      filter((e: Event) => e instanceof NavigationEnd)
    ).subscribe((e: NavigationEnd) => {
      this.isHome = e.url.endsWith('home');
    });
  }

}
