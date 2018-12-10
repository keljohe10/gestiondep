import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

const routes: Routes = [
  { path: 'nucleo', component: PlantillaComponent },
  { path: '**', component: PlantillaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
