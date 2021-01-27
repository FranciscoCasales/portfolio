import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

const AboutRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AboutRoutes)
  ]
})
export class AboutModule { }
