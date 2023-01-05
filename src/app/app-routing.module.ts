import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"contactanos", component:ContactanosComponent},
  {path:"**" , pathMatch:"full", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
