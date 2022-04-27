import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../service/rest.service";
import {FormBuilder} from "@angular/forms";

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
    this.forms = this.formBuilder.group({name: '', addres: ''});


  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe((paramsMaps: any) => {
      console.log(paramsMaps);
      console.log('params=  ', paramsMaps.id);
      this.findPelicula(paramsMaps.id);
    })

  }


  enviarComentarios() {
    console.log(this.forms.value);
    this.forms.reset();
    console.log(this.forms.value);

  }

  findPelicula(id: number) {
    this.rest.get('http://localhost:8080/data/' + id).subscribe(peli => {
      console.log("REST ID.....", peli);
      this.pelicula = peli;
    })
  }

}
