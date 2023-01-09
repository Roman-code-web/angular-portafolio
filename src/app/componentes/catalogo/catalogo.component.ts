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
    "imglink":"https://uc3e81942c3b76e619d12e71daee.previews.dropboxusercontent.com/p/thumb/ABwam5f8B11KUBvEy82juX6loQTPkB86AIUg4r7KRSYpUzysWCZxYSUrDBMmAHDs59QiLHWk4lidgboo6643-_kbPp8_Q2cYBEjXN2jR4nsJJCcO0LuKLlQDOmUvTMXobnWQyGa_ZYcDgpUhaUpoWUeKg-pQ3zf8oV-dA-_Klk29BJfLIBm4o0RpMZ16auM1eSbdkBIqH92q_aqLxQCRwOUuL1V7FIqj0xyw4eN_tGPHLkacGqGrJSnp069S_7Zg7HoO05fvcloJwYPsIkplZCrb6ks0E_hfzGQo2GF_PDxaVaP7Y9qh8EPt08_xCXhm-YI7H3mGj_HOtftCSaJcNaWaa6SyRauuajFbKwyPoJ_E9vP-yWck5Afb_hCu4GzS4IR8EdB1OPz9AlhiVOhpbSv27DhkNnleG1xCcK7M6R_ouQ/p.png",
    "subtitulo":"Angular Sesion 9"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA10-Taller1/",
    "imglink":"https://uc53cfb97f1b530667c57b254e29.previews.dropboxusercontent.com/p/thumb/ABynSPpD32x7n8ZgHxLpAUvnXCQd5xesIvvVYIIzziqqsnN8Up5A2spnGdWFx8t5bA5v5-DQBbJTSAMqTzPwmkXz0MPgTHRBl6JPfkkVF-w2a9pkCQaZti9QXMDioofphIkUP_dlMc94S8s2dZcHcqniFUbRPPz-eR3KYpxVKZMKav3SDnrp-sM6wG53EmX89sFFOJfx5cRczKypDDwbwN5WX8zQIuLp4zcBkCOnR4peLp0ix-XcX0Q3bFSKXFyr2bZPFOrGnIuIL7cIE4mtxdu6qXnbqKM0Kaah2XvBOGlbDYQwgcd53Hw-H7x_fUdjzLNVH2VaUC5sZnyn0g30tmxMMb4EqlN-GAUvkU60UrH55Xj8dl3JlvIdUYfFG7KOsHqp8-A9qg8a8USzzTvmhl9YrENsPnM7rEp3QHGGvUgTHQ/p.png",
    "subtitulo":"Angular Sesion 10"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/AByBYBPqPKQEEYtP7-sYfVRyj28nKOmqpcJW6eZ7l9Q2ldmkJOwhiwPg3IcJaRVJ1h9hbSxC0bFTyUYxlBnBMyf01JHN8U43s2QSXETmagvr-6ahGz31fdFT9Hgv0mEIDekAsuhwTQOsuRxxNeMk3ZkYq_TS-8TsPfSoj7_bdWuM72i_rZ3X5yw8B35_mi-du6bNdq6rvtAoR1UFL93IsqlIriCgv720xN_AQ8XHDBkjzAOtt7w1R6pU1wriItKU9mXmT4j7WDk628y9sBx05IsNTUYl9b63uSApvzg6VA1aR8oIzQdpaRYHIL-bacVeXoUeX10gVW5BP8FG69kZwq2K_7Y9Q3NQsZpvOqsvFhcgh0Ugdu4Avzz3ZfLgIw3E4G4RhLDfTPvmHmB-By-yme1IdQrAiIFpbQFTTQRO-la9lA/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/AByBYBPqPKQEEYtP7-sYfVRyj28nKOmqpcJW6eZ7l9Q2ldmkJOwhiwPg3IcJaRVJ1h9hbSxC0bFTyUYxlBnBMyf01JHN8U43s2QSXETmagvr-6ahGz31fdFT9Hgv0mEIDekAsuhwTQOsuRxxNeMk3ZkYq_TS-8TsPfSoj7_bdWuM72i_rZ3X5yw8B35_mi-du6bNdq6rvtAoR1UFL93IsqlIriCgv720xN_AQ8XHDBkjzAOtt7w1R6pU1wriItKU9mXmT4j7WDk628y9sBx05IsNTUYl9b63uSApvzg6VA1aR8oIzQdpaRYHIL-bacVeXoUeX10gVW5BP8FG69kZwq2K_7Y9Q3NQsZpvOqsvFhcgh0Ugdu4Avzz3ZfLgIw3E4G4RhLDfTPvmHmB-By-yme1IdQrAiIFpbQFTTQRO-la9lA/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/AByBYBPqPKQEEYtP7-sYfVRyj28nKOmqpcJW6eZ7l9Q2ldmkJOwhiwPg3IcJaRVJ1h9hbSxC0bFTyUYxlBnBMyf01JHN8U43s2QSXETmagvr-6ahGz31fdFT9Hgv0mEIDekAsuhwTQOsuRxxNeMk3ZkYq_TS-8TsPfSoj7_bdWuM72i_rZ3X5yw8B35_mi-du6bNdq6rvtAoR1UFL93IsqlIriCgv720xN_AQ8XHDBkjzAOtt7w1R6pU1wriItKU9mXmT4j7WDk628y9sBx05IsNTUYl9b63uSApvzg6VA1aR8oIzQdpaRYHIL-bacVeXoUeX10gVW5BP8FG69kZwq2K_7Y9Q3NQsZpvOqsvFhcgh0Ugdu4Avzz3ZfLgIw3E4G4RhLDfTPvmHmB-By-yme1IdQrAiIFpbQFTTQRO-la9lA/p.png",
    "subtitulo":"Angular Sesion 11"
  },
  {
    "link":"https://roman-code-web.github.io/angular-AA11-Actividad11/",
    "imglink":"https://uc82dfcea558e3a7ac5cb3fa1640.previews.dropboxusercontent.com/p/thumb/AByBYBPqPKQEEYtP7-sYfVRyj28nKOmqpcJW6eZ7l9Q2ldmkJOwhiwPg3IcJaRVJ1h9hbSxC0bFTyUYxlBnBMyf01JHN8U43s2QSXETmagvr-6ahGz31fdFT9Hgv0mEIDekAsuhwTQOsuRxxNeMk3ZkYq_TS-8TsPfSoj7_bdWuM72i_rZ3X5yw8B35_mi-du6bNdq6rvtAoR1UFL93IsqlIriCgv720xN_AQ8XHDBkjzAOtt7w1R6pU1wriItKU9mXmT4j7WDk628y9sBx05IsNTUYl9b63uSApvzg6VA1aR8oIzQdpaRYHIL-bacVeXoUeX10gVW5BP8FG69kZwq2K_7Y9Q3NQsZpvOqsvFhcgh0Ugdu4Avzz3ZfLgIw3E4G4RhLDfTPvmHmB-By-yme1IdQrAiIFpbQFTTQRO-la9lA/p.png",
    "subtitulo":"Angular Sesion 11"
  },
]
}
