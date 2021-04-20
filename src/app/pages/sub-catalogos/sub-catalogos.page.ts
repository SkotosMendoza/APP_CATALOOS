import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogosService } from '../../services/catalogos.service';

@Component({
  selector: 'app-sub-catalogos',
  templateUrl: './sub-catalogos.page.html',
  styleUrls: ['./sub-catalogos.page.scss'],
})
export class SubCatalogosPage implements OnInit {

  constructor(private rutas:ActivatedRoute, public servicio:CatalogosService ) { }
  subCat =[];


  ngOnInit() {
    this.rutas.params.subscribe(async data=> {
      console.log(data);
      const obj = {
        "id": data.id
      };
      this.servicio.getSubCatalogo(obj).then(data=>{
        console.log(data);
        this.subCat=data.data;

      });
    })
  }

}
