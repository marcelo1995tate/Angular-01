import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: any = []
  private RestService: RestService;

  constructor(RestService: RestService) {
    this.RestService = RestService;
  }


  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData():void {

    this.RestService.get('http://localhost:8080/data').subscribe(respuesta => {
      console.log("recibiendo REST",respuesta);
      this.cards=respuesta;
    });
  }
}
