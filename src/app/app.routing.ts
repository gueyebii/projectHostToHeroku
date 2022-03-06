import { RouterModule, Routes } from "@angular/router";
import { Router } from "express";
import { listenerCount } from "process";
import { ListeComponent } from "./liste/liste.component";
import { TestComponent } from "./presentation/test/test.component";




const APP_ROUTING: Routes = [
    {path:'liste', component: ListeComponent },
    {path: 'test', component: TestComponent}
];


export const ROUTING = RouterModule.forRoot(APP_ROUTING);

