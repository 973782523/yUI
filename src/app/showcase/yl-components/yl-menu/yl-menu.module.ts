import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YlMenuComponent} from './yl-menu.component';
import {YlMenuScrollComponent} from './yl-menu-scroll/yl-menu-scroll.component';


@NgModule({
    declarations: [YlMenuComponent, YlMenuScrollComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        YlMenuComponent,
        YlMenuScrollComponent
    ]
})
export class YlMenuModule {
}
