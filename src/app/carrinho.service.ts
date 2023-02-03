import { Injectable } from '@angular/core';
import { IServicoCarrinho } from './servicos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IServicoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); /*não tem o back para pegar informações do carrinho por isso tem que salvar as informações dentro do localStrorage*/ 
    return this.itens;
    /*parse - converte de string para objeto*/ 
  }

  adicionarAoCarrinho(servico: IServicoCarrinho) {
    this.itens.push(servico);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    /*stringify - converte de um objeto para string */
  }

  removerServicoCarrinho(servicoId: number) {
    this.itens = this.itens.filter(item => item.id !== servicoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }
}
