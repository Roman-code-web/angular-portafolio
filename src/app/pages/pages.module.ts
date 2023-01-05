import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    HomeComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],exports:[
    HomeComponent,
    ContactanosComponent
  ]
})
export class PagesModule { }
