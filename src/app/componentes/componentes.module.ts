import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { InformacionComponent } from './informacion/informacion.component';
import { SkilsComponent } from './skils/skils.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EstilosValidacionDirective } from '../directivas/estilos-validacion.directive';



@NgModule({
  declarations: [
    BannerComponent,
    InformacionComponent,
    SkilsComponent,
    CatalogoComponent,
    FormComponent,
    EstilosValidacionDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],exports:[
    BannerComponent,
    InformacionComponent,
    SkilsComponent,
    CatalogoComponent,
    FormComponent
  ]
})
export class ComponentesModule { }
