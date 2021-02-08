import { Component, OnInit } from '@angular/core';
import { TimeLineModel } from '@shared/model/timeline.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  public timeLine: TimeLineModel[];

  constructor() { }

  ngOnInit(): void {
    this.timeLine = [
      this.buildTimeLineElement('Full Stack Developer', 'Yoin', 'February 2020 – August 2020',
        `I help to develop a web application with Angular to manage condominiums. I defined the different parts of this
        app like components, routing, state mangment, QA, Dev and prod configurations, rest API integration, push
        notification and more. Furthermore, I had the opportunity to develop a websocket implementation from both,
        frontend and backend also I integrated the firebase services for push notification on this app and collaborate
        to build the rest API in Java.`),
      this.buildTimeLineElement('Java Developer', 'Axity', 'February 2019 – February 2020',
        `Develop a rest API to manage condominiums with Java and Springbot using mariadb as database and cloud base
        architecture. Also, I developed a chatbot in DialogFlow and integrate it with Slack to get the employees data
        like name, phone number, email, available days of vacations, etc.`),
      this.buildTimeLineElement('Project Engineer', 'Premier Automation International S.A. de C.V.', 'June 2017 – January 2019',
        `Develop a Java application implements database to manage the inventory. Design electric blueprints in AutoCAD,
        build control panels, quote projects and design HMI applications in WonderWare. Also, I went to Colombia to install
        a sensor to monitoring the product humidity.`)
    ];
  }

  private buildTimeLineElement(job: string, company: string, period: string, description: string): TimeLineModel {
    return {
      job,
      company,
      period,
      description
    };
  }

}
