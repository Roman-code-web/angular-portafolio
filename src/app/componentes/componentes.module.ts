import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { InformacionComponent } from './informacion/informacion.component';



@NgModule({
  declarations: [
    BannerComponent,
    InformacionComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BannerComponent,
    InformacionComponent
  ]
})
export class ComponentesModule { }
