const produtos = [];

function Produto(nome, preco, emEstoque){
    this.nome = nome;
    this.preco = preco;
    this.emEstoque = emEstoque;

}

const p1 = new Produto("celular", 10, false);
produtos.push(p1);

produtos.push(new Produto("celular", 2000, true));
produtos.push(new Produto(""))
