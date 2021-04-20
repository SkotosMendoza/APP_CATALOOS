import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubCatalogosPage } from './sub-catalogos.page';

const routes: Routes = [
  {
    path: '',
    component: SubCatalogosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubCatalogosPageRoutingModule {}
