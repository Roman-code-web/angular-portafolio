import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SkilsComponent } from './skils/skils.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    BannerComponent,
    InformacionComponent,
    SkilsComponent,
    CatalogoComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],exports:[
    BannerComponent,
    InformacionComponent,
    SkilsComponent,
    CatalogoComponent
  ]
})
export class ComponentesModule { }
