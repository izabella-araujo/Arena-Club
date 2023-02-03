import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IServico} from '../servicos';
import { ServicosService } from '../servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit {
  servicos: IServico[] | undefined;

  constructor(
    private servicosService: ServicosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const servicos = this.servicosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();


      if (descricao) {
        this.servicos = servicos.filter(servico => servico.descricao.toLowerCase().includes(descricao));
        return;
      }

      this.servicos = servicos;
    })
  }
}
