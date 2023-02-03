import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicoRoutingModule } from './servico-routing.module';
import { ServicoComponent } from './servico.component';
import { DetalhesServicoComponent } from './detalhes-servico/detalhes-servico.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServicoComponent,
    DetalhesServicoComponent
  ],
  imports: [
    CommonModule,
    ServicoRoutingModule,
    FormsModule
  ]
})
export class ServicoModule { }
