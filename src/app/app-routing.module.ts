import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGuard } from './core/guards/user.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canLoad: [ UserGuard ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [ AdminGuard ]
  },

  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: '**', redirectTo: 'app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
