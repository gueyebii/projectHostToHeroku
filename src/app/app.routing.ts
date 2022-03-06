import { RouterModule, Routes } from "@angular/router";
import { Router } from "express";
import { listenerCount } from "process";
import { ListeComponent } from "./liste/liste.component";
import { StyleComponent } from "./module/style/style.component";
import { TestComponent } from "./presentation/test/test.component";




const APP_ROUTING: Routes = [
    {path: 'liste', redirectTo: '/', pathMatch: 'full'},
    {path:'test/:default', component: ListeComponent },
    {path: '', component: TestComponent},
    {path: 'style', component: StyleComponent}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTING);



