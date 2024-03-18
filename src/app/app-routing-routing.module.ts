import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LayoutComponent } from './layout/layout.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
  {path:'layout',component:LayoutComponent},
  {path:'my-profile',component:ProfileComponent},
  {path:'',component:LoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
