import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const MAIN_ROUTES: Routes = [
  {
    path:'',
    loadChildren: ()=> import('./passenger-dashboard/passenger-dashboard.module').then((m)=>m.PassengerDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(MAIN_ROUTES ,{preloadingStrategy: PreloadAllModules})],

  exports: [RouterModule]
})
export class AppRoutingModule { }
