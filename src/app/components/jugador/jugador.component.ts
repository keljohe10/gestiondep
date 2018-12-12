import { Component, OnInit } from '@angular/core';
import { PlantillaService } from '../../providers/plantilla.service';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador: any = {};
  constructor( private _serv: PlantillaService, private activated: ActivatedRoute, private router: Router) {

    window.scrollTo(0, 0);
    this.activated.params.subscribe( params => {
      this.jugador = this._serv.getJugador(params['id']);

    });


  }

 ngOnInit() {

    }
}
