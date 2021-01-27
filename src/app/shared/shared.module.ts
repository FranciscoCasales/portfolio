import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { DragDropDirective } from './directives/drag-drop.directive';

@NgModule({
    declarations: [SliderComponent, DragDropDirective],
    exports: [SliderComponent, DragDropDirective],
    imports: [ CommonModule ]
})
export class SharedModule { }
