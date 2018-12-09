import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private jugadores = [
    {
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '10',
      foto: 'fut.jpg'
    },
    {
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '6',
      foto: 'bas.jpg'
    },
    {
     Nombre: 'Neal de oro pino',
     nacimiento: '12/02/2009',
      Edad: '8',
      foto: 'beis.jpg'
    },
    {
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '12',
      foto: 'nata.jpg'
    },
    {
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '11',
      foto: 'atle.jpg'
    },
    {
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '9',
      foto: 'fut2.jpg'
    }];

  constructor() { }

  getJugadores() {
    return this.jugadores;
  }
}
