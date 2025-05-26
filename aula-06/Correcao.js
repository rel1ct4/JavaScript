/**att 1 */

const criarUsuario = (nome, idade, email) => {
    return {
        nome: nome,
        idade: idade,
        email: email
    };
};

const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
console.log(usuario);
// Resultado esperado: { nome: "Jorge", idade: 17, email: "jorginho@hotmail.com" }

/**att 2 */
const atualizarIdade = (usuario, novaIdade) => {
    usuario.idade = novaIdade;
};

const usuarioAtualizacao = { nome: "Marcos", idade: 19, email: "marquinhos@hotmail.com" };
atualizarIdade(usuarioAtualizacao, 25);
console.log(usuarioAtualizacao.idade); // Resultado esperado: 25
console.log(usuarioAtualizacao); // Para ver o objeto completo atualizado
// Resultado esperado: { nome: "Marcos", idade: 25, email: "marquinhos@hotmail.com" }

/**att3 */
const explorarObjeto = (objeto, operacao) => {
    if (operacao === "chaves") {
        return Object.keys(objeto);
    } else if (operacao === "valores") {
        return Object.values(objeto);
    } else if (operacao === "entradas") {
        return Object.entries(objeto);
    } else {
        return "Operação inválida.";
    }
};

const pessoa = {
    nome: "Ana",
    idade: 28,
    cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
// Resultado esperado: ["nome", "idade", "cidade"]

console.log(explorarObjeto(pessoa, "valores"));
// Resultado esperado: ["Ana", 28, "Recife"]

console.log(explorarObjeto(pessoa, "entradas"));
// Resultado esperado: [["nome", "Ana"], ["idade", 28], ["cidade", "Recife"]]

console.log(explorarObjeto(pessoa, "teste"));
// Resultado esperado: "Operação inválida."

/**att 4 */
const exibirCatalogo = (produtos) => {
    console.log("Catálogo de Produtos:");
    for (let i in produtos) {
        const produto = produtos[i];
        console.log(`${produto.nome} - R$${produto.preco}`);
    }
};

const produtosCatalogo = [
    { nome: "Teclado", preco: 100 },
    { nome: "Monitor", preco: 800 },
    { nome: "Webcam", preco: 250 }
];

exibirCatalogo(produtosCatalogo);
// Resultado esperado:
// Catálogo de Produtos:
// Teclado - R$100
// Monitor - R$800
// Webcam - R$250

/**att 5 */
const protegerObjeto = (objeto, modoProtecao) => {
    if (modoProtecao === "extensivel") {
        Object.preventExtensions(objeto);
    } else if (modoProtecao === "selado") {
        Object.seal(objeto);
    } else if (modoProtecao === "congelado") {
        Object.freeze(objeto);
    } else {
        console.log("Modo de proteção inválido.");
    }

    return {
        extensivel: Object.isExtensible(objeto),
        selado: Object.isSealed(objeto),
        congelado: Object.isFrozen(objeto)
    };
};

const produtoProtecao = { nome: "Câmera", preco: 1200 };
const resultadoProtecao = protegerObjeto(produtoProtecao, "congelado");
console.log(resultadoProtecao);
// Resultado esperado: { extensivel: false, selado: false, congelado: true }

const produtoExtensivel = { a: 1 };
const resultadoExtensivel = protegerObjeto(produtoExtensivel, "extensivel");
console.log(resultadoExtensivel);
// Resultado esperado: { extensivel: false, selado: false, congelado: false }

const produtoSelado = { b: 2 };
const resultadoSelado = protegerObjeto(produtoSelado, "selado");
console.log(resultadoSelado);
// Resultado esperado: { extensivel: false, selado: true, congelado: false }

/**att 6 */

const gerenciarProdutos = (produtos, comando, ...args) => {
    if (comando === "listarDisponiveis") {
        return produtos.filter(produto => produto.estoque > 0);
    } else if (comando === "buscarProduto") {
        const nomeProduto = args[0];
        return produtos.find(produto => produto.nome === nomeProduto);
    } else if (comando === "calcularValorTotal") {
        return produtos.reduce((total, produto) => total + (produto.preco * produto.estoque), 0);
    } else if (comando === "atualizarEstoque") {
        const nomeProduto = args[0];
        const novaQuantidade = args[1];
        const produto = produtos.find(p => p.nome === nomeProduto);
        if (produto) {
            produto.estoque = novaQuantidade;
            console.log(`Estoque de "${nomeProduto}" atualizado para ${novaQuantidade}.`);
        } else {
            console.log(`Produto "${nomeProduto}" não encontrado.`);
        }
        // Não há retorno específico para esta ação, mas o array 'produtos' é modificado diretamente
    } else {
        return "Comando inválido.";
    }
};

const produtosLoja = [
    { nome: "Celular", preco: 2000, estoque: 5 },
    { nome: "Notebook", preco: 3500, estoque: 0 },
    { nome: "Fone de Ouvido", preco: 250, estoque: 12 }
];

console.log("--- Gerenciamento de Produtos ---");

// Listar disponíveis
console.log("Produtos disponíveis:", gerenciarProdutos(produtosLoja, "listarDisponiveis"));
// Resultado esperado: [{ nome: "Celular", preco: 2000, estoque: 5 }, { nome: "Fone de Ouvido", preco: 250, estoque: 12 }]

// Buscar um produto
console.log("Buscar Notebook:", gerenciarProdutos(produtosLoja, "buscarProduto", "Notebook"));
// Resultado esperado: { nome: "Notebook", preco: 3500, estoque: 0 }

// Calcular valor total
console.log("Valor total em estoque:", gerenciarProdutos(produtosLoja, "calcularValorTotal"));
// Resultado esperado: 13000 (2000*5 + 250*12 = 10000 + 3000 = 13000)

// Atualizar estoque
gerenciarProdutos(produtosLoja, "atualizarEstoque", "Notebook", 3);
console.log("Estoque do Notebook após atualização:", produtosLoja[1].estoque);  // Resultado esperado: 3
console.log("Array de produtos após atualização:", produtosLoja);


