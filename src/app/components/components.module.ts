import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CatalogosComponent } from './catalogos/catalogos.component';



@NgModule({
  declarations: [CatalogoComponent,CatalogosComponent],
  exports:[
    CatalogosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
