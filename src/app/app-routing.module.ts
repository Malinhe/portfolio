import { NgModule } from '@angular/core';
import { ExtraOptions, Route, Router, RouterModule, Routes, Scroll } from '@angular/router';
import { DataProtectComponent } from './data-protect/data-protect.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPresentationComponent } from './main-presentation/main-presentation.component';
import { filter } from 'rxjs';

const routes: Routes = [
  { path: '', component: MainPresentationComponent, data: { scrollPositionRestoration: 'disabled' } },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    router.events.pipe(
      filter((e): e is Scroll => e instanceof Scroll)
    ).subscribe((e: any) => {
      if (e.position) {
        window.scrollTo(e.position[0], e.position[1]);
      } else if (e.anchor) {
        document.querySelector('#' + e.anchor).scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
  }
}

// Define the scrollPositionRestoration option for each route separately
export const routeConfig: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

export const imprintRoute: Route = {
  path: 'imprint',
  component: ImprintComponent,
  data: {
    scrollPositionRestoration: 'enabled',
    routeConfig
  }
};

export const dataProtectRoute: Route = {
  path: 'data-protection',
  component: DataProtectComponent,
  data: {
    scrollPositionRestoration: 'enabled',
    routeConfig
  }
};
