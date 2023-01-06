import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {
tituloCatalogo="Portafolio";
listaPortafolio=[
  {
    "link":"https://roman-code-web.github.io/angular-AA7-actividad9/",
    "imglink":"https://uc3e81942c3b76e619d12e71daee.previews.dropboxusercontent.com/p/thumb/ABwq_FrtP7YOKKLR6WrrOJDl6L_PyeFd8KEjHAtIzmUTWT_v6420ctz6ypR8MLJlMc1uKKOVt4Gih81icmsviXBchwKkHYEuTzaFEPHSG2-cxjwyT8TK8USNeWY0KOk6I3oxdKtr1fLMQoMpj6qI54OBr7gHgdOWx-GVF87Dy49EYPBXFBNUE34VuYD_gNenV0x4S4HCFUKg9EcQZ9_U-cvDaVmDTmV3M20pfMGli_aCKsVi-4qStcO8NdbpLAs_mg5Acl4Hw2UT5FrnFa5RGotaULEgA-f8o76KBOyHIRgEHbMjLVCtJzCQUppPKKEuFIchTOVEkwBCM0YomQH046OVdup4Ab3wW4iVaDFescWvZnpojHS9kqIZGsBOaYGLSzEC3lKRHoX6tk9mudsL-4UEN27sMolPot3OuZINiN7ikg/p.png",
    "subtitulo":"Angular Sesion 9"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA10-Taller1/",
    "imglink":"https://uc53cfb97f1b530667c57b254e29.previews.dropboxusercontent.com/p/thumb/ABy_D5e5b934rSHdruNBXgsDxFeMvhRaKjiV_vz6q3JqWfavbgFxo3_lJnC2BnU4ifte2HgWHykqcnL65J-TutChtqxtW6MQ9yqoZe1sCGnJnwX_QFkPKP6xiXas2QUVgFCq52yoiWPz5cwcp3G3RRD6prA59TSTNbJBLnOUgWnrZzX9rFi_rVssE_mOkt7W5XhjB97cl2KV9JP8OMF6ZlR8aS0QKgO9jZzklVLenLkAB5t4FXaQm-XOD0_Ey9R10836LLUNZSU2ERFHIMKFjfVNh_wzPaAK1kaWdcTMhhizpieywESjoOgY5DEVYsfds5ZncxQTegjJ1n_V-cEqYT7FrB5zgmWGMj4Hyb1dmSAEFQzdz0qfvHVLfMC7PPjg8ItfQeUVecSPTn_Cx2cYaB9mshkS5V8Res6EwH0Lka4A8Q/p.png",
    "subtitulo":"Angular Sesion 10"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/ABw0Da5QkWF99-QSK5mZY2sHuZ9-2M6ohCEDjBcxvnGD7Fkuljx3DSF4a016cIYlun0KSy2X5WgYdh4KlXslgdvhs8xbHsnYQARPTlMph600GA3koJRirODK2xy-TfvJQjdRFO6Q-VazqGgpL34-euTfXyloP3OKaCu7pKzDU8moYPNSofFPl9Gi-IZB-SSCSaQno0fXUWhm5kPYBWn_57vPA8_9fPeSQq3R0sxg4i6Yz8perEIk-0wKimtrAVvEBXgtBdwRD1Rp2iw-krCQCcGAjtLtrPkIyYedp2strnYVlDDJ1omKbpzTIsVq_FqbFuEmgUCHeIbN_I0E3hIz3VcIAgEdfIbrz1ET-GGkuxHP9Mbwvtrp09oVodLdyN0fa2DiBOzx4V35tccm0TvceO1xhwqaz03fE-rnceeqzho3ng/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/ABw0Da5QkWF99-QSK5mZY2sHuZ9-2M6ohCEDjBcxvnGD7Fkuljx3DSF4a016cIYlun0KSy2X5WgYdh4KlXslgdvhs8xbHsnYQARPTlMph600GA3koJRirODK2xy-TfvJQjdRFO6Q-VazqGgpL34-euTfXyloP3OKaCu7pKzDU8moYPNSofFPl9Gi-IZB-SSCSaQno0fXUWhm5kPYBWn_57vPA8_9fPeSQq3R0sxg4i6Yz8perEIk-0wKimtrAVvEBXgtBdwRD1Rp2iw-krCQCcGAjtLtrPkIyYedp2strnYVlDDJ1omKbpzTIsVq_FqbFuEmgUCHeIbN_I0E3hIz3VcIAgEdfIbrz1ET-GGkuxHP9Mbwvtrp09oVodLdyN0fa2DiBOzx4V35tccm0TvceO1xhwqaz03fE-rnceeqzho3ng/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/ABw0Da5QkWF99-QSK5mZY2sHuZ9-2M6ohCEDjBcxvnGD7Fkuljx3DSF4a016cIYlun0KSy2X5WgYdh4KlXslgdvhs8xbHsnYQARPTlMph600GA3koJRirODK2xy-TfvJQjdRFO6Q-VazqGgpL34-euTfXyloP3OKaCu7pKzDU8moYPNSofFPl9Gi-IZB-SSCSaQno0fXUWhm5kPYBWn_57vPA8_9fPeSQq3R0sxg4i6Yz8perEIk-0wKimtrAVvEBXgtBdwRD1Rp2iw-krCQCcGAjtLtrPkIyYedp2strnYVlDDJ1omKbpzTIsVq_FqbFuEmgUCHeIbN_I0E3hIz3VcIAgEdfIbrz1ET-GGkuxHP9Mbwvtrp09oVodLdyN0fa2DiBOzx4V35tccm0TvceO1xhwqaz03fE-rnceeqzho3ng/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/ABw0Da5QkWF99-QSK5mZY2sHuZ9-2M6ohCEDjBcxvnGD7Fkuljx3DSF4a016cIYlun0KSy2X5WgYdh4KlXslgdvhs8xbHsnYQARPTlMph600GA3koJRirODK2xy-TfvJQjdRFO6Q-VazqGgpL34-euTfXyloP3OKaCu7pKzDU8moYPNSofFPl9Gi-IZB-SSCSaQno0fXUWhm5kPYBWn_57vPA8_9fPeSQq3R0sxg4i6Yz8perEIk-0wKimtrAVvEBXgtBdwRD1Rp2iw-krCQCcGAjtLtrPkIyYedp2strnYVlDDJ1omKbpzTIsVq_FqbFuEmgUCHeIbN_I0E3hIz3VcIAgEdfIbrz1ET-GGkuxHP9Mbwvtrp09oVodLdyN0fa2DiBOzx4V35tccm0TvceO1xhwqaz03fE-rnceeqzho3ng/p.png",
    "subtitulo":"Angular Sesion 11"
  },
]
}
