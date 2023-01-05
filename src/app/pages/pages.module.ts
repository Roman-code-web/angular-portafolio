import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [
    HomeComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    HomeComponent,
    ContactanosComponent
  ]
})
export class PagesModule { }
