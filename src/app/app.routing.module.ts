import { Routes } from "@angular/router";

export const RUTAS: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(module => module.HomeModule)
    },
    {
        path: 'contacto',
        loadChildren: () => import('./modules/contacto/contacto.module').then(module => module.ContactoModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]