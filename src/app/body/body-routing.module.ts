import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { FlyerComponent } from './flyer/flyer.component';

export const routes: Routes = [
    {path: 'inicio', component: BodyComponent, children:[
        {path: 'nose', component:FlyerComponent},
    ]
}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BodyRoutingModule {
}