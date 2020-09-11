import { NgModule } from '@angular/core';
import { LayoutComponent } from '@layout/layout.component';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
    LayoutComponent
]

@NgModule({
    declarations: [COMPONENTS, NavBarComponent],
    imports: [
        RouterModule
    ],
    exports: [],
    providers: [],
})
export class CoreModule {}
