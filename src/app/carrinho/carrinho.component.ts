import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IServicoCarrinho } from '../servicos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],

})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IServicoCarrinho[] = [];
  total = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.itensCarrinho = this.carrinhoService.obtemCarrinho();
      this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

    removeServicoCarrinho(servicoId: number) {
      this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== servicoId);
      this.carrinhoService.removerServicoCarrinho(servicoId);
      this.calcularTotal();
    }

    comprar() {
      alert("Parabéns, você finalizou seu plano!");
      this.carrinhoService.limparCarrinho();
      this.router.navigate(["servico"]);
    }
}
