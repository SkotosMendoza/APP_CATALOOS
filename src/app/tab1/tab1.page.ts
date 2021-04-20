import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../services/catalogos.service';
import { Datum, RootObject } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  catalogos: Datum[] = [];
  constructor(private CatalogosService: CatalogosService) {}
  ngOnInit(){
    this.CatalogosService.getCatalog().subscribe(resp=>{
      console.log('catalogos', resp);
      this.catalogos.push(...resp.data);
    });
  }

}
