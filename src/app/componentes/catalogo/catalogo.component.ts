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
    "imglink":"https://previews.dropbox.com/p/thumb/ABwTGSwNOhgVAhj8QdYMfwQIOsF-ZdzaA_BEKVzD5lB3RcRya5Qp2wnxBsDFqxeOwiWL7uEVZ1G_fqyJPt0F-8dS0qP6kSo3uUYAeg7D8PgaecRRXw5VKgiBsqD2-GqlNVYzHmHUUvR4DO5hMywbv5X_lwNOXVHv0HfGmz9OW0UqIxadj8NbcV7DE7I82xGEsFuwhfGie-PCzxvJ3AINQi2wnA_totUudiA1x11Dot38Xo6bAXUYGnrmP0IP5SII6WCVwq5nbeBTk8E4_TZlwZOkxlRD3IgDSMmQzBS1qEw1SWbmKfbTgecVGpaOJCMDVXG_IK0dZCC4ly28WUeaD1dWFcJFM6sTXD06Rrxut28RNrvH6G05jobP3JBUgnrC72Y/p.png",
    "subtitulo":"Angular Sesion 9"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA10-Taller1/",
    "imglink":"https://previews.dropbox.com/p/thumb/AByDMGleQ6MMWVzS--3K_yW6ML1ZluM8ORZDcCsc685pT8nvzm-_dsIrNsLE60nUk868KzqCOraLJiE13ZdnVxu0E7zNZsRo9F-KVTJRUAuqB3lW8E-cyBxq8gbgz_dEFd6y_KjPZaAnSO6-1MWE6eKDWHLBxku7bIkePm5TIn_n3l6MG7f9y0MmevdzI0_TLuK1jqjUJra3Oe1i5sRkogNsYCIlBTqfrRO0nEbzTSZ8za0N4EYI9Jvv5ZiPJVtvHPobe_ihr1SrKDRyCE2vFyzW4qcWGPwTMrltbSWkQJJwGHhW9T95jDgc2zVdjYCa0kRphCnS2ZEUk2CA1bfIKYtHnUGfuVQNR8mszuA1VjCnmOLigm4qGTEvRKgwlDydec0/p.png",
    "subtitulo":"Angular Sesion 10"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://previews.dropbox.com/p/thumb/ABxSAMHZDraDv_BCFZNfUwIvaPpC1TILyeQBJZLE1Sm5lvlY0xcUUX81wRkvF4BYKxFhYTxsV9dBDdTtZTNtz_ctZyVXfsY7EW3x94b4TqEtjwT5Rn3fDDiqLuqSszWkhcwqh33hT1ii-SoSGxHKgFjilQmnSw98_mh8cR8Yocu9KXcp5jC8iMAI7594duFlnoOqCE1Ghl5yf75LcXV8U6ODzzXfAnn0l-Yz8etxqS4RDSBWcxxoITCWu_28OMGbA0pWZJjj8P_qPHbvVn8evgF7BbSufr-N7-Dgy1H-zbmrucwAkJoSRq_3UGtCVlbK3m4ci8DclnVLb3fDSAb1Gxg0eGu1xCb9R4UvSeTzT3TisUoO4DG1ih1psc6fQhWiY2M/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://previews.dropbox.com/p/thumb/ABxSAMHZDraDv_BCFZNfUwIvaPpC1TILyeQBJZLE1Sm5lvlY0xcUUX81wRkvF4BYKxFhYTxsV9dBDdTtZTNtz_ctZyVXfsY7EW3x94b4TqEtjwT5Rn3fDDiqLuqSszWkhcwqh33hT1ii-SoSGxHKgFjilQmnSw98_mh8cR8Yocu9KXcp5jC8iMAI7594duFlnoOqCE1Ghl5yf75LcXV8U6ODzzXfAnn0l-Yz8etxqS4RDSBWcxxoITCWu_28OMGbA0pWZJjj8P_qPHbvVn8evgF7BbSufr-N7-Dgy1H-zbmrucwAkJoSRq_3UGtCVlbK3m4ci8DclnVLb3fDSAb1Gxg0eGu1xCb9R4UvSeTzT3TisUoO4DG1ih1psc6fQhWiY2M/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://previews.dropbox.com/p/thumb/ABxSAMHZDraDv_BCFZNfUwIvaPpC1TILyeQBJZLE1Sm5lvlY0xcUUX81wRkvF4BYKxFhYTxsV9dBDdTtZTNtz_ctZyVXfsY7EW3x94b4TqEtjwT5Rn3fDDiqLuqSszWkhcwqh33hT1ii-SoSGxHKgFjilQmnSw98_mh8cR8Yocu9KXcp5jC8iMAI7594duFlnoOqCE1Ghl5yf75LcXV8U6ODzzXfAnn0l-Yz8etxqS4RDSBWcxxoITCWu_28OMGbA0pWZJjj8P_qPHbvVn8evgF7BbSufr-N7-Dgy1H-zbmrucwAkJoSRq_3UGtCVlbK3m4ci8DclnVLb3fDSAb1Gxg0eGu1xCb9R4UvSeTzT3TisUoO4DG1ih1psc6fQhWiY2M/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://previews.dropbox.com/p/thumb/ABxSAMHZDraDv_BCFZNfUwIvaPpC1TILyeQBJZLE1Sm5lvlY0xcUUX81wRkvF4BYKxFhYTxsV9dBDdTtZTNtz_ctZyVXfsY7EW3x94b4TqEtjwT5Rn3fDDiqLuqSszWkhcwqh33hT1ii-SoSGxHKgFjilQmnSw98_mh8cR8Yocu9KXcp5jC8iMAI7594duFlnoOqCE1Ghl5yf75LcXV8U6ODzzXfAnn0l-Yz8etxqS4RDSBWcxxoITCWu_28OMGbA0pWZJjj8P_qPHbvVn8evgF7BbSufr-N7-Dgy1H-zbmrucwAkJoSRq_3UGtCVlbK3m4ci8DclnVLb3fDSAb1Gxg0eGu1xCb9R4UvSeTzT3TisUoO4DG1ih1psc6fQhWiY2M/p.png",
    "subtitulo":"Angular Sesion 11"
  },
]
}
