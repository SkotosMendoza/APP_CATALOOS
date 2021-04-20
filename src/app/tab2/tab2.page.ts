import { Component } from '@angular/core';
import { CatalogosService } from '../services/catalogos.service';

import { Datum, RootObject } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  catalogos: Datum[] = [];
  constructor(private CatalogosService: CatalogosService, public servicio:CatalogosService ) {}
  ngOnInit(){
    this.CatalogosService.getCatalog().subscribe(resp=>{

      console.log('catalogos', resp);
      this.catalogos=resp.data;
    });
  }
  deleteCata(id){
    const obj = {
      "id": id
    };
    this.servicio.delSubCatalogo(obj).then(data=>{
      console.log(data);
      this.CatalogosService.getCatalog().subscribe(resp=>{

        console.log('catalogos', resp);
        this.catalogos=resp.data;
      });


    });



  }

}
