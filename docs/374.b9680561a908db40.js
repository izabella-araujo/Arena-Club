"use strict";(self.webpackChunkarenaClub=self.webpackChunkarenaClub||[]).push([[374],{8374:(M,_,n)=>{n.r(_),n.d(_,{ServicoModule:()=>d});var m=n(6895),u=n(9541),o=n(1571);const f=[{id:1,descricao:"Muscula\xe7\xe3o",preco:100,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/musculacao.jpg",quantidadeDisponivel:50},{id:2,descricao:"Yoga",preco:120,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/yoga.jpg",quantidadeDisponivel:50},{id:3,descricao:"Volei",preco:70,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/volei.jpg",quantidadeDisponivel:50},{id:4,descricao:"Tenis",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/tenis.jpg",quantidadeDisponivel:50},{id:5,descricao:"Treinador",preco:299.99,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/treinador.jpg",quantidadeDisponivel:50},{id:6,descricao:"Dieta",preco:200,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/dieta.jpg",quantidadeDisponivel:50},{id:7,descricao:"Futsal",preco:70,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/futsal.jpg",quantidadeDisponivel:50},{id:8,descricao:"Crossfit",preco:150,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/crossfit.jpg",quantidadeDisponivel:50},{id:9,descricao:"Corrida",preco:50,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/corrida.jpg",quantidadeDisponivel:50},{id:10,descricao:"Box",preco:130,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/box.jpg",quantidadeDisponivel:50},{id:11,descricao:"Basquete",preco:70,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/basquete.jpg",quantidadeDisponivel:50},{id:12,descricao:"Jiu-Jitsu",preco:130,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/jisj.jpg",quantidadeDisponivel:50},{id:13,descricao:"Sala de Jogos",preco:300,descricaoPreco:"\xc0 vista no PIX",imagem:"/assets/game.jpg",quantidadeDisponivel:30}];class c{constructor(){this.servicos=f}getAll(){return this.servicos}getOne(e){return this.servicos.find(i=>i.id==e)}}c.\u0275fac=function(e){return new(e||c)},c.\u0275prov=o.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"});var h=n(8881);class r{constructor(e){this.snackBar=e}notificar(e){this.snackBar.open(e,"OK",{duration:2e3,verticalPosition:"top",horizontalPosition:"center"})}}r.\u0275fac=function(e){return new(e||r)(o.LFG(h.ux))},r.\u0275prov=o.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"});var P=n(5087),a=n(433);class l{constructor(e,i,p,v){this.servicosService=e,this.route=i,this.notificacaoService=p,this.carrinhoService=v,this.quantidade=1}ngOnInit(){const i=Number(this.route.snapshot.paramMap.get("id"));this.servico=this.servicosService.getOne(i)}adicionarAoCarrinho(){this.notificacaoService.notificar("O servi\xe7o foi adicionado ao carrinho");const e={...this.servico,quantidade:this.quantidade};this.carrinhoService.adicionarAoCarrinho(e)}}function x(t,e){if(1&t&&(o.TgZ(0,"div",2)(1,"a",3),o._UZ(2,"img",4),o.TgZ(3,"h2",5),o._uU(4),o.qZA(),o.TgZ(5,"p",6),o._uU(6),o.ALo(7,"currency"),o.qZA(),o.TgZ(8,"p",7),o._uU(9),o.qZA(),o.TgZ(10,"button",8),o._uU(11,"Comprar"),o.qZA()()()),2&t){const i=e.$implicit;o.xp6(1),o.MGl("routerLink","/servico/",i.id,""),o.xp6(1),o.Q6J("src",i.imagem,o.LSH),o.xp6(2),o.hij(" ",i.descricao," "),o.xp6(2),o.hij(" ",o.xi3(7,5,i.preco,"BRL")," "),o.xp6(3),o.hij(" ",i.descricaoPreco," ")}}l.\u0275fac=function(e){return new(e||l)(o.Y36(c),o.Y36(u.gz),o.Y36(r),o.Y36(P.e))},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-detalhes-servico"]],decls:19,vars:8,consts:[[1,"product__container"],[1,"product-image__container"],["alt","",3,"src"],[1,"product-description__container"],[1,"product__name"],[1,"product__price"],["type","number","min","1",3,"ngModel","ngModelChange"],[1,"product__avaiability"],[3,"click"]],template:function(e,i){1&e&&(o.TgZ(0,"section",0)(1,"div",1),o._UZ(2,"img",2),o.qZA(),o.TgZ(3,"div",3)(4,"h2",4),o._uU(5),o.qZA(),o.TgZ(6,"h3",5),o._uU(7),o.ALo(8,"currency"),o.qZA(),o.TgZ(9,"p"),o._uU(10,"Vagas disponivel"),o.qZA(),o.TgZ(11,"label"),o._uU(12," quantidade: "),o.TgZ(13,"input",6),o.NdJ("ngModelChange",function(v){return i.quantidade=v}),o.qZA(),o._uU(14," vaga (s) "),o.qZA(),o.TgZ(15,"p",7),o._uU(16),o.qZA(),o.TgZ(17,"button",8),o.NdJ("click",function(){return i.adicionarAoCarrinho()}),o._uU(18,"Adicionar ao carrinho"),o.qZA()()()),2&e&&(o.xp6(2),o.Q6J("src",null==i.servico?null:i.servico.imagem,o.LSH),o.xp6(3),o.Oqu(null==i.servico?null:i.servico.descricao),o.xp6(2),o.Oqu(o.xi3(8,5,null==i.servico?null:i.servico.preco,"BRL")),o.xp6(6),o.Q6J("ngModel",i.quantidade),o.xp6(3),o.hij(" ",null==i.servico?null:i.servico.quantidadeDisponivel," vagas disponiveis "))},dependencies:[a.Fj,a.wV,a.JJ,a.qQ,a.On,m.H9],styles:[".product__container[_ngcontent-%COMP%]{display:flex;column-gap:20px;margin:20px 0}.product-image__container[_ngcontent-%COMP%]{align-self:center}.product__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:350px;height:350px}.product__name[_ngcontent-%COMP%]{font-size:36px;color:#2a044a}.product__price[_ngcontent-%COMP%]{font-size:28px;font-weight:400;margin:20px 0;color:#2a044a}.product-description__container[_ngcontent-%COMP%]{border:1px solid #cfddb6;border-radius:8px;padding:15px;flex:1;color:#0b2e59}.product__avaiability[_ngcontent-%COMP%]{font-size:12px}label[_ngcontent-%COMP%]{margin:20px 0;display:block}input[_ngcontent-%COMP%]{width:30px;padding:5px}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}button[_ngcontent-%COMP%]{background-color:#0d6759;border:none;padding:10px;color:#fff;font-size:24px;transition:.3s all;margin:20px 0;cursor:pointer}button[_ngcontent-%COMP%]:hover{filter:brightness(1.3)}"]});class g{constructor(e,i){this.servicosService=e,this.route=i}ngOnInit(){const e=this.servicosService.getAll();this.route.queryParamMap.subscribe(i=>{const p=i.get("descricao")?.toLowerCase();this.servicos=p?e.filter(v=>v.descricao.toLowerCase().includes(p)):e})}}g.\u0275fac=function(e){return new(e||g)(o.Y36(c),o.Y36(u.gz))},g.\u0275cmp=o.Xpm({type:g,selectors:[["app-servico"]],decls:2,vars:1,consts:[[1,"product-list"],["class","product-list__card",4,"ngFor","ngForOf"],[1,"product-list__card"],[1,"product-list__link",3,"routerLink"],[3,"src"],[1,"product-item__name"],[1,"product-item__price"],[1,"product-item__price-description"],["type","button",1,"product-item__buy-button"]],template:function(e,i){1&e&&(o.TgZ(0,"section",0),o.YNc(1,x,12,8,"div",1),o.qZA()),2&e&&(o.xp6(1),o.Q6J("ngForOf",i.servicos))},dependencies:[m.sg,u.rH,m.H9],styles:[".product-list[_ngcontent-%COMP%]{padding:40px 0;width:-moz-fit-content;width:fit-content;display:flex;gap:20px;flex-flow:row wrap;justify-content:space-evenly;align-content:center}.product-list__card[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:4px;flex:0 1 270px;height:450px;background-color:#a0c55f;box-shadow:#63636333 0 2px 8px}.product-list__card[_ngcontent-%COMP%]:hover{outline:1px solid var(--blue);transform:scale(1.1);cursor:pointer}.product-list__link[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;row-gap:10px;text-decoration:none}.product-list__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px;width:250px;display:block;border-radius:4px}.product-item__name[_ngcontent-%COMP%]{font-size:24px;color:#2a044a}.product-item__price[_ngcontent-%COMP%]{color:#2a044a;font-size:32px;font-weight:700}.product-item__price-description[_ngcontent-%COMP%]{color:#2a044a;font-size:15px;font-weight:700}.product-item__buy-button[_ngcontent-%COMP%]{background-color:#0d6759;border:none;color:#fff;font-size:20px;padding:6px 12px}.product-item__buy-button[_ngcontent-%COMP%]:hover{filter:brightness(1.1);cursor:pointer}"]});var C=n(5353);const b=[{path:"",component:g},{path:":id",component:l},{path:"**",component:C.d}];class s{}s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[u.Bz.forChild(b),u.Bz]});class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[m.ez,s,a.u5]})}}]);