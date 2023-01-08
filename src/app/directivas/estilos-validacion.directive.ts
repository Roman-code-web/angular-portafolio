import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appEstilosValidacion]'
})
export class EstilosValidacionDirective implements OnChanges {
//1.declaro variable que recibe si ocurrio un error
@Input() inputError!:boolean ;
@Input() touched!:boolean;
//contructor para hacer referecia al elemento
  constructor( private me: ElementRef)  { }
  
  cambiarStylos(){
    if(this.inputError==true){
      this.me.nativeElement.classList.add('is-invalid');
      this.me.nativeElement.classList.remove('is-valid');
    }else{
      this.me.nativeElement.classList.remove('is-invalid');
      this.me.nativeElement.classList.add('is-valid');
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(this.touched==true){
      this.cambiarStylos();
    }else{
      this.me.nativeElement.classList.remove('is-invalid');
      this.me.nativeElement.classList.remove('is-valid');
    }
    
  }
  
}
