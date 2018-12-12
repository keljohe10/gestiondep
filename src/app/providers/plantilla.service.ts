import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantillaService {

  private jugadores = [
    {
      id: '0',
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '10',
      foto: 'fut.jpg'
    },
    {
      id: '1',
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '6',
      foto: 'bas.jpg'
    },
    {
      id: '2',
     Nombre: 'Neal de oro pino',
     nacimiento: '12/02/2009',
      Edad: '8',
      foto: 'beis.jpg'
    },
    {
      id: '3',
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '12',
      foto: 'nata.jpg'
    },
    {
      id: '4',
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '11',
      foto: 'atle.jpg'
    },
    {
      id: '5',
      Nombre: 'Kelvin hernandez cabrera',
      nacimiento: '12/02/2009',
      Edad: '9',
      foto: 'fut2.jpg'
    }];

  constructor() { }

  getJugadores() {
    return this.jugadores;
  }

  getJugador( id: string) {
    return this.jugadores[id];
  }
}
