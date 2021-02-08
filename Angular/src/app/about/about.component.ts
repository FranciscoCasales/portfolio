import { Component, OnInit } from '@angular/core';
import { SkillModel } from '@shared/model/skill.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public skills: SkillModel[];

  constructor() { }

  ngOnInit(): void {
    this.fillSkills();
  }

  fillSkills() {
    this.skills = [
      this.buildSkill('Angular', 95),
      this.buildSkill('Java', 90),
      this.buildSkill('SpringBoot', 70),
      this.buildSkill('git', 85),
      this.buildSkill('Typescript', 85),
      this.buildSkill('NodeJS', 30),
      this.buildSkill('React', 70),
      this.buildSkill('Unity', 30),
      this.buildSkill('Mongodb', 85),
      this.buildSkill('Flutter', 50),
      this.buildSkill('Aws', 50),
      this.buildSkill('Ionic', 80),
      this.buildSkill('Dialogflow', 70),
      this.buildSkill('Swift', 35),
      this.buildSkill('Docker', 50),
      this.buildSkill('Terminal', 70)
    ];
  }

  buildSkill(title: string, percentage: number): SkillModel {
    return { title: title, percentage: percentage };
  }

}
