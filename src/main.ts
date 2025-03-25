import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules, Route } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';

const routes: Route[] = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'page1',
    loadComponent: () => import('./app/pages/page1/page1.component').then(m => m.Page1Component)
  },
  {
    path: 'page2',
    loadComponent: () => import('./app/pages/page2/page2.component').then(m => m.Page2Component)
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
