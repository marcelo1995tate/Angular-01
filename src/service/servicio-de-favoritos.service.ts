import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeFavoritosService {

  constructor() {
  }

  @Output() disparadorDeFavoritos: EventEmitter<any> = new EventEmitter();

}
