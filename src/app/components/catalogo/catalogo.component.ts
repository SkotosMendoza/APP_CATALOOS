import { Component, Input, OnInit } from '@angular/core';
import { Datum } from '../../interfaces/interfaces';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  @Input() catalogo: Datum;
  
  constructor() { }

  ngOnInit() {}

}
