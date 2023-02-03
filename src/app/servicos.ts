/*simulação da interação com o backend*/
/*as imagens estarão alocadas no frontend, mas no ambiente de produção teria a url da imagem vinda do backend*/

export interface IServico {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeDisponivel: number;
    imagem: string;
}

export interface IServicoCarrinho extends IServico{
    quantidade: number;
}

export const servicos: IServico[] = [
    { id: 1, descricao: "Musculação", preco: 100.00, descricaoPreco: "À vista no PIX", imagem: "./assets/musculacao.jpg", quantidadeDisponivel:50 },
    { id: 2, descricao: "Yoga", preco: 120.00, descricaoPreco: "À vista no PIX", imagem: "./assets/yoga.jpg", quantidadeDisponivel:50 },
    { id: 3, descricao: "Volei", preco: 70.00, descricaoPreco: "À vista no PIX", imagem: "./assets/volei.jpg", quantidadeDisponivel:50 },
    { id: 4, descricao: "Tenis", preco: 200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/tenis.jpg", quantidadeDisponivel:50 },
    { id: 5, descricao: "Treinador", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "./assets/treinador.jpg", quantidadeDisponivel:50 },
    { id: 6, descricao: "Dieta", preco: 200.00, descricaoPreco: "À vista no PIX", imagem: "./assets/dieta.jpg", quantidadeDisponivel:50 },
    { id: 7, descricao: "Futsal", preco: 70.00, descricaoPreco: "À vista no PIX", imagem: "./assets/futsal.jpg", quantidadeDisponivel:50 },
    { id: 8, descricao: "Crossfit", preco: 150.00, descricaoPreco: "À vista no PIX", imagem: "./assets/crossfit.jpg", quantidadeDisponivel:50 },
    { id: 9, descricao: "Corrida", preco: 50.00, descricaoPreco: "À vista no PIX", imagem: "./assets/corrida.jpg", quantidadeDisponivel:50 },
    { id: 10, descricao: "Box", preco: 130.00, descricaoPreco: "À vista no PIX", imagem: "./assets/box.jpg", quantidadeDisponivel:50 },
    { id: 11, descricao: "Basquete", preco: 70.00, descricaoPreco: "À vista no PIX", imagem: "./assets/basquete.jpg", quantidadeDisponivel:50 },
    { id: 12, descricao: "Jiu-Jitsu", preco: 130.00, descricaoPreco: "À vista no PIX", imagem: "./assets/jisj.jpg", quantidadeDisponivel:50 },
    { id: 13, descricao: "Sala de Jogos", preco: 300.00, descricaoPreco: "À vista no PIX", imagem: "./assets/game.jpg", quantidadeDisponivel:30 },
]