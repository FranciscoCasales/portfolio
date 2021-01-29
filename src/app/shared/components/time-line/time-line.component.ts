import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { TimeLineModel } from '@shared/model/timeline.model';

@Component({
  selector: 'time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit, OnChanges {

  @Input() timeLineProperties: TimeLineModel[];
  private pastElements = 0;
  public height = '0px';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.updateHeight();
  }

  private updateHeight() {
    if (this.pastElements !== this.timeLineProperties.length) {
      this.pastElements = this.timeLineProperties.length;
      this.height = `${244 * this.pastElements}px`;
    }
  }

}
