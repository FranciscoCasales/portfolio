import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { TimeLineComponent } from './components/time-line/time-line.component';

@NgModule({
    declarations: [SliderComponent, TimeLineComponent],
    exports: [SliderComponent, TimeLineComponent],
    imports: [ CommonModule ]
})
export class SharedModule { }
