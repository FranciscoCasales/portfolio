import { NgModule } from '@angular/core';
import { LayoutComponent } from '@layout/layout.component';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
    LayoutComponent
]

@NgModule({
    declarations: [COMPONENTS, NavBarComponent],
    imports: [
        RouterModule,
        CommonModule
    ],
    exports: [],
    providers: [],
})
export class CoreModule {}
