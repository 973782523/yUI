import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YlMenuViewRoutingModule } from './yl-menu-view-routing.module';
import {YlMenuViewComponent} from './yl-menu-view.component';
import {YlMenuModule} from '../../yl-components/yl-menu/yl-menu.module';


@NgModule({
  declarations: [YlMenuViewComponent],
    imports: [
        CommonModule,
        YlMenuViewRoutingModule,
        YlMenuModule
    ]
})
export class YlMenuViewModule { }
