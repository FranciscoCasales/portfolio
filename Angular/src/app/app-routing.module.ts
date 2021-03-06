import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@core/components/not-found/not-found.component';
import { LayoutComponent } from '@layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    component: LayoutComponent,
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        data: { animationState: 'Home' }
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        data: { animationState: 'About' }
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
        data: { animationState: 'Portfolio' }
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
