import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataProtectComponent } from './data-protect/data-protect.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainPresentationComponent } from './main-presentation/main-presentation.component';

const routes: Routes = [
  { path: '', component: MainPresentationComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: 'data-protection', component: DataProtectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
