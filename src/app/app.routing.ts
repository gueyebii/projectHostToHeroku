import { RouterModule, Routes } from "@angular/router";
import { Router } from "express";
import { url } from "inspector";
import { listenerCount } from "process";
import { ListeComponent } from "./liste/liste.component";
import { StyleComponent } from "./module/style/style.component";
import { DetailComponent } from "./presentation/detail/detail.component";
import { TestComponent } from "./presentation/test/test.component";




const APP_ROUTING: Routes = [
    {path: 'liste', redirectTo: '', pathMatch: 'full'},
    {path:'test/:default', component: ListeComponent },
    {path: '', component: TestComponent},
    {path:'detail/:id', component: DetailComponent},
    {path:'detail/:id/#article', component: DetailComponent},
    {path: 'style', component: StyleComponent}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTING);

