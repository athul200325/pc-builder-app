import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./components/homePage/homePage').then(m => m.homePage)
    },
    {
        path: 'login', 
        loadComponent: () => import('./components/login/login').then(m => m.Login)
    },
    {
        path: 'register', 
        loadComponent: () => import('./components/register/register').then(m => m.Register)
    },
    {
        path: 'components-list', 
        loadComponent: () => import('./components/components-list/components-list').then(m => m.ComponentsList)
    },
    {
        path: 'pc-builder', 
        loadComponent: () => import('./components/pc-builder/pc-builder').then(m => m.PcBuilder)
    },
    {
        path: 'prebuild-pcs', 
        loadComponent: () => import('./components/prebuild-pcs/prebuild-pcs').then(m => m.PrebuildPcs)
    },
    {
        path: 'cart', 
        loadComponent: () => import('./components/cart/cart').then(m => m.Cart)
    },
    {
        path: 'profile', 
        loadComponent: () => import('./components/user-profile/user-profile').then(m => m.UserProfile)
    },
];
