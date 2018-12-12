import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PublicidadComponent } from './shared/publicidad/publicidad.component';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { DatosPersonalesComponent } from './components/jugador/datos-personales.component';
import { DatosDeportivosComponent } from './components/jugador/datos-deportivos.component';
import { AsistenciasComponent } from './components/jugador/asistencias.component';
import { EstudiosComponent } from './components/jugador/estudios.component';
import { DocumentosComponent } from './components/jugador/documentos.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    HeaderComponent,
    FooterComponent,
    PublicidadComponent,
    HomeComponent,
    JugadorComponent,
    DatosPersonalesComponent,
    DatosDeportivosComponent,
    AsistenciasComponent,
    EstudiosComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
