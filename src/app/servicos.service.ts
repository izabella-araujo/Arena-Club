import { Injectable } from '@angular/core';
import {IServico, servicos} from './servicos';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  servicos: IServico[] = servicos;

  constructor() { }

  getAll() {
    return this.servicos;
  }

  getOne(servicoId: number){
    return this.servicos.find(servico => servico.id == servicoId);
  }
}
