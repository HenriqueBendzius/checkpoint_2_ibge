// import { Routes } from '@angular/router';

// export const routes: Routes = [];







import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RotaComponent } from './rota/rota.component'; // Verifique se o nome do arquivo está correto aqui
// import { EstadosComponent } from './estados/estados.component';
// import { IbgeService } from './services/ibge.service';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nova-rota', component: RotaComponent },
    // { path: 'estados', component: EstadosComponent },
    { path: '**', component: HomeComponent }
];


// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class RoutesModule { }
