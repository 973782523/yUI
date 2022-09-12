import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YlMenuViewRoutingModule } from './yl-menu-view-routing.module';
import {YlMenuViewComponent} from './yl-menu-view.component';
import {YlMenuModule} from '../../yl-components/yl-menu/yl-menu.module';
import {AppCodeModule} from '../../app.code.component';
import {TabViewModule} from '../../../components/tabview/tabview';


@NgModule({
  declarations: [YlMenuViewComponent],
    imports: [
        CommonModule,
        YlMenuViewRoutingModule,
        YlMenuModule,
        AppCodeModule,
        TabViewModule
    ]
})
export class YlMenuViewModule { }
