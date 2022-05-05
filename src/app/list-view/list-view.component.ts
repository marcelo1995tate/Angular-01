import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {RestService} from "../../service/rest.service";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {
  @ViewChild('editTmpl', {static: true})
  editTmpl!: TemplateRef<any>;
  @ViewChild('hdrTpl', {static: true})
  hdrTpl!: TemplateRef<any>;

  data: any = [];
  columns: any = [];

  ColumnMode = ColumnMode;

  constructor(private rest: RestService) {
  }

  ngOnInit(): void {
    this.columns = [
      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `id`
      },      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `img`
      },
      {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `title`
      }, {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `subtitle`
      }, {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `view`
      }, {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: `comentarios`
      },
    ];
    this.cargarData();
  }

  public cargarData(): void {

    this.rest.get('http://localhost:8080/data').subscribe((respuesta: any) => {
      console.log("recibiendo REST", respuesta);
      this.data = respuesta;
    });
  }
}
