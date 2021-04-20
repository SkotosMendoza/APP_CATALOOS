import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubCatalogosPageRoutingModule } from './sub-catalogos-routing.module';

import { SubCatalogosPage } from './sub-catalogos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubCatalogosPageRoutingModule
  ],
  declarations: [SubCatalogosPage]
})
export class SubCatalogosPageModule {}
