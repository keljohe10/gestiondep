import { AsistenciasComponent } from './components/jugador/asistencias.component';
import { DatosDeportivosComponent } from './components/jugador/datos-deportivos.component';
import { DatosPersonalesComponent } from './components/jugador/datos-personales.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { DocumentosComponent } from './components/jugador/documentos.component';
import { EstudiosComponent } from './components/jugador/estudios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nucleo', component: PlantillaComponent },
  {
    path: 'jugador/:id',
    component: JugadorComponent,
    children: [
      { path: 'personal', component: DatosPersonalesComponent },
      { path: 'deportivo', component: DatosDeportivosComponent},
      { path: 'asistencia', component: AsistenciasComponent},
      { path: 'documentos', component: DocumentosComponent },
      { path: 'estudios', component: EstudiosComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'personal' }
    ]
   },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
