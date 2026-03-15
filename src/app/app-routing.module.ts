import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PlaceholderComponent } from './placeholder/placeholder.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/public/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('./pages/public/noticias/noticias.page').then((m) => m.NoticiasPage),
  },
  { path: 'noticia/:id', component: PlaceholderComponent },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./pages/public/eventos/eventos.page').then((m) => m.EventosPage),
  },
  { path: 'evento/:id', component: PlaceholderComponent },
  {
    path: 'contato',
    loadComponent: () =>
      import('./pages/public/contato/contato.page').then((m) => m.ContatoPage),
  },
  {
    path: 'associar',
    loadComponent: () =>
      import('./pages/public/associar/associar.page').then((m) => m.AssociarPage),
  },
  { path: 'admin/login', component: PlaceholderComponent },
  { path: 'admin/dashboard', component: PlaceholderComponent },
  { path: 'admin/noticias', component: PlaceholderComponent },
  { path: 'admin/eventos', component: PlaceholderComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
