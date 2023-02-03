import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IServico, IServicoCarrinho } from 'src/app/servicos';
import { ServicosService } from 'src/app/servicos.service'

@Component({
  selector: 'app-detalhes-servico',
  templateUrl: './detalhes-servico.component.html',
  styleUrls: ['./detalhes-servico.component.css']
})
export class DetalhesServicoComponent implements OnInit {
  servico: IServico | undefined;
  quantidade = 1;

  constructor(
    private servicosService: ServicosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ){ }

  ngOnInit(): void {
    const routeParams =  this.route.snapshot.paramMap;
    const servicoId = Number(routeParams.get('id'));
    this.servico = this.servicosService.getOne(servicoId);
  }

  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O serviço foi adicionado ao carrinho");
    const servico: IServicoCarrinho = {
      ...this.servico!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(servico);
  }
}
