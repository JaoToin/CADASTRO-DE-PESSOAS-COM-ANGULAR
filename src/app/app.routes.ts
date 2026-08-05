import { Routes } from '@angular/router';
import { CadastroPessoa } from './cadastro-pessoa/cadastro-pessoa';
import { Home } from './home/home';
import { Consulta } from './consulta/consulta';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },

    {
        path: 'home',
        component: Home
    },

    {
        path: 'cadastropessoa',
        component: CadastroPessoa
    },

    {
        path: 'consulta',
        component: Consulta
    }
];
