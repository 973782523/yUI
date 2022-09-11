import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {YlMenuViewComponent} from './yl-menu-view.component';

const routes: Routes = [{
    path: '', component: YlMenuViewComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YlMenuViewRoutingModule {
}
