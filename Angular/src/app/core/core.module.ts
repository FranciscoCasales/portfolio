import { NgModule } from '@angular/core';
import { LayoutComponent } from '@layout/layout.component';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const COMPONENTS = [
    LayoutComponent
]

@NgModule({
    declarations: [COMPONENTS, NavBarComponent, SideBarComponent, NotFoundComponent],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [],
    providers: [],
})
export class CoreModule {}
