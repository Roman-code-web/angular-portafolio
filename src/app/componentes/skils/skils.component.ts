import { Component } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.css']
})
export class SkilsComponent {
  listaSkills=[{
    "nombre":"HTML",
    "nivel":"Avanzado",
    "porcentaje":"100%",
    "value":"100",
    "style":"width: 100%",
    "color":"bg-primary"
  },
  {
    "nombre":"CSS",
    "nivel":"Avanzado",
    "porcentaje":"90%",
    "value":"90",
    "style":"width: 90%",
    "color":"bg-success"
  },
  {
    "nombre":"BOOTSTRAP",
    "nivel":"Avanzado",
    "porcentaje":"80%",
    "value":"80",
    "style":"width: 80%",
    "color":"bg-secondary"
  },
  {
    "nombre":"JS",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
    "color":"bg-warning"
  },
  {
    "nombre":"PHP",
    "nivel":"Intermedio",
    "porcentaje":"50%",
    "value":"50",
    "style":"width: 50%",
    "color":"bg-info"
  },
  {
    "nombre":"MONGODB",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
    "color":"bg-morado"
  },{
    "nombre":"SQL SERVER",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
    "color":"bg-orange"
  }
  ,{
    "nombre":"MYSQL",
    "nivel":"Intermedio",
    "porcentaje":"70%",
    "value":"70",
    "style":"width: 70%",
    "color":"bg-rosado"
  }
];
}
