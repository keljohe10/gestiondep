import { Router } from '@angular/router';
import { PlantillaService } from '../../providers/plantilla.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  jugadores: any [] = [];

  constructor(private _jugadores: PlantillaService,
              private _route: Router) {
      window.scrollTo(0, 0);
   }

  ngOnInit() {
     this.jugadores = this._jugadores.getJugadores();
  }

  getJugador( id: string) {
    this._route.navigate(['/jugador', id]);
  }

}
