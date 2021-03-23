import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'portfolio';

  constructor(private _router: Router) {
    const path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this._router.navigate([path]);
    }
  }

}
