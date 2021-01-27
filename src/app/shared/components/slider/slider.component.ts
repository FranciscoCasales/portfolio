import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SkillLevelEnum } from '@shared/enums/skill-level.enum';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges, OnInit {

  @Input() percentage = 40;
  @Input() skill = '';
  private pastPercentage;
  public clazz = '';
  public clazzIndicator = '';
  public skillLevel = SkillLevelEnum;

  constructor() { }

  ngOnInit() {
    this.changeClazz();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.changeClazz();
  }

  private changeClazz() {
    if (this.percentage !== this.pastPercentage) {
      setTimeout(() => {
        this.pastPercentage = this.percentage;
        this.clazz = 'w-' + this.percentage;
        this.clazzIndicator = 'left-' + this.percentage;
      }, 500);
    }
  }

}
