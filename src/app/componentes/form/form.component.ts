import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  //1.Declaro Variables.
  formEnvio!:FormGroup;

  mensajeError={
      errornombre:"",
      erroremail:"",
      errorasunto:"",
      errormensaje:""
  };
  
  //2.declaro el constructor
  constructor(private formEnvioBuilder: FormBuilder){}

  //3.implemento el ngOnInit
  ngOnInit():void{
  //4.
  this.formEnvio=this.formEnvioBuilder.group({
  //7.llamamos por el formcontrolname  
    nombre:['',
      [
        Validators.required,
      ]
    ],  
    email:['',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]
    ],
    asunto:['',
      [
        Validators.required,
      ]
    ],  
    mensaje:['',
      [
        Validators.required,
      ]
    ],
  });
  }

  validarInput(nombre:string){
      if((this.formEnvio.get(nombre)?.touched || this.formEnvio.get(nombre)?.dirty) && this.formEnvio.get(nombre)?.errors){
      
        if(this.formEnvio.get(nombre)?.errors?.['required']){
          if(nombre=='nombre'){
            this.mensajeError.errornombre="Escribe tu nombre";
          }else if (nombre=='email'){
            this.mensajeError.erroremail="Escribe tu email";
          }else if (nombre=='asunto'){
            this.mensajeError.errorasunto="Escribe tu asunto";
           
          }else if (nombre=='mensaje'){
            this.mensajeError.errormensaje="Escribe tu mensaje";
          }
          
          //console.log(nombre)
        }else if (this.formEnvio.get(nombre)?.errors?.['pattern']){
          if(nombre=='email'){
            this.mensajeError.erroremail="Escriba un correo valido";
          }
        }else {
          
          this.mensajeError.errornombre="";
          this.mensajeError.erroremail="";
          this.mensajeError.errorasunto="";
          this.mensajeError.errormensaje="";
        }
      }
   return true
  
  }
  enviarDatos(){
    Swal.fire({
      icon: 'success',
      title: 'Datos Enviados',
    })
    this.formEnvio.reset();
  }
}
