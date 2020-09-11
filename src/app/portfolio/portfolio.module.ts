import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { Routes, RouterModule } from '@angular/router';

const PortfolioRoutes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PortfolioRoutes)
  ]
})
export class PortfolioModule { }
