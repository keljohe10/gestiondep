import { PlantillaService } from '../../providers/plantilla.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent implements OnInit {

  jugadores: any [] = [];

  constructor(private _jugadores: PlantillaService) {

   }

  ngOnInit() {
     this.jugadores = this._jugadores.getJugadores();
    console.log(this.jugadores);
  }

}
