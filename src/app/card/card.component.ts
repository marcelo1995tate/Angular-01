import {Component, OnInit, Input} from '@angular/core';
import {ServicioDeFavoritosService} from "../../service/servicio-de-favoritos.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public image!: string;
  @Input() dataEntrante: any;

  constructor(private serviceFavoritos: ServicioDeFavoritosService) {
  }

  ngOnInit(): void {
    this.image = 'https://www.qualtrics.com/m/assets/es/wp-content/uploads/2020/07/imagen-de-marca-e1595517598345.png'
    console.log('Llamando componente: ', this.dataEntrante)
  }

  agregarFavorito() {
    this.serviceFavoritos.disparadorDeFavoritos.emit({data: this.dataEntrante});
    console.log('Emitiendo data...: ', this.dataEntrante)

  }
}
