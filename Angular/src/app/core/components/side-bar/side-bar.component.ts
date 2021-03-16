import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  public isVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showMenu() {
    this.isVisible = !this.isVisible;
  }

}
