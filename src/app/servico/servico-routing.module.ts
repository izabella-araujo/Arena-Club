import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesServicoComponent } from './detalhes-servico/detalhes-servico.component';
import { ServicoComponent } from './servico.component';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: '', component: ServicoComponent },
  { path: ':id', component: DetalhesServicoComponent },
  { path: "**", component: NaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoRoutingModule { }
