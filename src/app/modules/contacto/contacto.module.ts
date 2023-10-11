import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContactoComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
