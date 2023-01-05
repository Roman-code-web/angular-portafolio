import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SkilsComponent } from './skils/skils.component';



@NgModule({
  declarations: [
    BannerComponent,
    InformacionComponent,
    SkilsComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BannerComponent,
    InformacionComponent
  ]
})
export class ComponentesModule { }
