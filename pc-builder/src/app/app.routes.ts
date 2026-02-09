import { Routes } from '@angular/router';
import { authGuardGuard } from './guard/auth.guard-guard';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./components/homePage/homePage').then(m => m.homePage), canActivate: [authGuardGuard]
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
        loadComponent: () => import('./components/components-list/components-list').then(m => m.ComponentsList), canActivate: [authGuardGuard]
    },
    {
        path: 'pc-builder', 
        loadComponent: () => import('./components/pc-builder/pc-builder').then(m => m.PcBuilder), canActivate: [authGuardGuard]
    },
    {
        path: 'prebuild-pcs', 
        loadComponent: () => import('./components/prebuild-pcs/prebuild-pcs').then(m => m.PrebuildPcs), canActivate: [authGuardGuard]
    },
    {
        path: 'cart', 
        loadComponent: () => import('./components/cart/cart').then(m => m.Cart), canActivate: [authGuardGuard]
    },
    {
        path: 'profile', 
        loadComponent: () => import('./components/user-profile/user-profile').then(m => m.UserProfile), canActivate: [authGuardGuard]
    },
];
