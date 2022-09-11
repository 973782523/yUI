import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {YlMenuComponent} from './yl-menu.component';


@NgModule({
    declarations: [YlMenuComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        YlMenuComponent
    ]
})
export class YlMenuModule {
}
