import { Component } from '@angular/core';
import { CatalogosService } from '../services/catalogos.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public servicio:CatalogosService ) {}

  obj = {
    "nombre":"",
    "categoria":"",
    "codigo":0
  };
  enviar(){
    console.log(this.obj);
    this.servicio.addCatalogo(this.obj).then(data=>{
      console.log(data);
      

    });
  }

}
