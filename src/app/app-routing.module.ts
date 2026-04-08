import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-user', pathMatch: 'full' },
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
  {
    path: 'noticia/:id',
    loadComponent: () =>
      import('./pages/public/noticia/noticia.page').then((m) => m.NoticiaPage),
  },
  {
    path: 'eventos',
    loadComponent: () =>
      import('./pages/public/eventos/eventos.page').then((m) => m.EventosPage),
  },
  {
    path: 'evento/:id',
    loadComponent: () =>
      import('./pages/public/evento/evento.page').then((m) => m.EventoPage),
  },
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
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/admin/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'login-user',
    loadComponent: () => import('./pages/public/login-user/login-user.page').then(m => m.LoginUserPage),
  },
  {
    path: 'eventos-admin',
    loadComponent: () => import('./pages/admin/eventos-admin/eventos-admin.page').then( m => m.EventosAdminPage)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
