import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { DragDropDirective } from './directives/drag-drop.directive';
import { TimeLineComponent } from './components/time-line/time-line.component';

@NgModule({
    declarations: [SliderComponent, DragDropDirective, TimeLineComponent],
    exports: [SliderComponent, DragDropDirective, TimeLineComponent],
    imports: [ CommonModule ]
})
export class SharedModule { }
