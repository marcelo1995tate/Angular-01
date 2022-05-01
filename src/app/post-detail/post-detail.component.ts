import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../service/rest.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public id: any;
  public pelicula: any;
  public forms;

  constructor(private rutaActiva: ActivatedRoute, private rest: RestService, private formBuilder: FormBuilder) {
    this.rutaActiva.params.subscribe((paramsMaps: any) => {
      this.id=paramsMaps.id;
    })
    this.forms = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.forms = this.formBuilder.group({idPelicula: this.id, comentario: ''});
    this.findPelicula(this.id);
  }

  enviarComentarios() {
    console.log(this.forms.value);

    this.rest.post('http://localhost:8080/comentar',this.forms.value).subscribe(peli => {
      console.log("ENVIO DE COMENTARIO.....");
    })
    this.forms.reset();
    this.ngOnInit()
  }


  findPelicula(id: number) {
    this.rest.get('http://localhost:8080/data/' + id).subscribe(peli => {
      console.log("REST ID.....", peli);
      this.pelicula = peli;
    })
  }

}
