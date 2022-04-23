import {Component, OnInit} from '@angular/core';
import {ServicioDeFavoritosService} from "../../service/servicio-de-favoritos.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public listaDeFavoritos: Array<any> = [];

  constructor(private serviceFavoritos: ServicioDeFavoritosService) {
  }

  ngOnInit(): void {
    this.serviceFavoritos.disparadorDeFavoritos.subscribe(data => {
      console.log('recibiendo data....', data);
      this.listaDeFavoritos.push(data);
      console.log('favoritos...', this.listaDeFavoritos);
    })
  }

}
