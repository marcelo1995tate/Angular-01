import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../service/rest.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public id: any;
  public pelicula: any;

  constructor(private rutaActiva: ActivatedRoute, private rest: RestService) {
  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((paramsMaps: any) => {
      console.log(paramsMaps);
      console.log('params=  ', paramsMaps.id);
      this.findPelicula(paramsMaps.id);
    })

  }

  findPelicula(id: number) {
    this.rest.get('http://localhost:8080/data/'+id).subscribe(peli => {
      console.log("REST ID.....", peli);
      this.pelicula = peli;
    })
  }

}
