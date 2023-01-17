import { Component } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent {
  listaSkills=[{
    "imagen":"https://img.icons8.com/fluency/512/html-5.png",
    "nombre":"HTML",
    "nivel":"Avanzado",
    "porcentaje":"100%",
    "value":"100",
    "style":"width: 100%",
    "color":"bg-primary"
  },
  {
    "imagen":"https://img.icons8.com/color/512/css3.png",
    "nombre":"CSS",
    "nivel":"Avanzado",
    "porcentaje":"90%",
    "value":"90",
    "style":"width: 90%",
  
  },
  {
    "imagen":"https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    "nombre":"BOOTSTRAP",
    "nivel":"Avanzado",
    "porcentaje":"80%",
    "value":"80",
    "style":"width: 80%",

  },
  {
    "imagen":"https://img.icons8.com/fluency/512/javascript.png",
    "nombre":"JS",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",

  },
  {
    "imagen":"https://img.icons8.com/officel/512/php-logo.png",
    "nombre":"PHP",
    "nivel":"Intermedio",
    "porcentaje":"50%",
    "value":"50",
    "style":"width: 50%",
  },
  {
    "imagen":"https://img.icons8.com/color/512/mongodb.png",
    "nombre":"MONGODB",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
  
  },
  {
    "imagen":"https://img.icons8.com/color/512/microsoft-sql-server.png",
    "nombre":"SQL SERVER",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",

  }
  ,{
    "imagen":"https://img.icons8.com/color/512/mysql-logo.png",
    "nombre":"MYSQL",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
  }
];
}
