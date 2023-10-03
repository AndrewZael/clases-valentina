import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PadreComponent } from './componentes/padre/padre.component';
import { HijoComponent } from './componentes/hijo/hijo.component';
import { ContentComponent } from './componentes/content/content.component';
import { DirectivasComponent } from './componentes/directivas/directivas.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { ObservablesComponent } from './componentes/observables/observables.component';
import { BoxComponent } from './componentes/observables/components/box/box.component';
import { BoxIIComponent } from './componentes/observables/components/box-ii/box-ii.component';
import { BoxIIIComponent } from './componentes/observables/components/box-iii/box-iii.component';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    ContentComponent,
    DirectivasComponent,
    FormulariosComponent,
    ObservablesComponent,
    BoxComponent,
    BoxIIComponent,
    BoxIIIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
