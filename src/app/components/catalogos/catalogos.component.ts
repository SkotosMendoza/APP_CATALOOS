import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/interfaces';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styleUrls: ['./catalogos.component.scss'],
})
export class CatalogosComponent implements OnInit {

  @Input() catalogos:Datum[] =[]
  constructor(private ruta:Router) { }

  ngOnInit() {}

  eventSubCatalog(id) {
    console.log(id);
    this.ruta.navigate(["/tabs/sub-catalogos",id]);
    
  }

}
