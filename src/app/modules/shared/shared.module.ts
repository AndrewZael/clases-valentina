import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './componentes/card/card.component';
import { HeaderComponent } from './componentes/header/header.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent
  ], 
  exports: [
    CardComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
