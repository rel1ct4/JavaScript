/**att 01 */
const gerenciarTarefas = (tarefas, acao, novaTarefa) => {
    if (acao === "adicionarInicio") {
        tarefas.unshift(novaTarefa);
    } else if (acao === "adicionarFim") {
        tarefas.push(novaTarefa);
    } else if (acao === "removerInicio") {
        tarefas.shift();
    } else if (acao === "removerFim") {
        tarefas.pop();
    } else {
        console.log("Ação inválida. As ações possíveis são: adicionarInicio, adicionarFim, removerInicio, removerFim.");
    }
};

const tarefas = ["Estudar", "Treinar", "Ler"];

console.log("Tarefas iniciais:", tarefas); // ["Estudar", "Treinar", "Ler"]

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");
console.log("Depois de adicionarFim:", tarefas); // Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]

gerenciarTarefas(tarefas, "adicionarInicio", "Acordar");
console.log("Depois de adicionarInicio:", tarefas); // Resultado esperado: ["Acordar", "Estudar", "Treinar", "Ler", "Dormir"]

gerenciarTarefas(tarefas, "removerInicio");
console.log("Depois de removerInicio:", tarefas); // Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]

gerenciarTarefas(tarefas, "removerFim");
console.log("Depois de removerFim:", tarefas); // Resultado esperado: ["Estudar", "Treinar", "Ler"]

/**att2 */
const calcularMedia = (notas) => {
    const notasOrdenadas = notas.sort((a, b) => b - a);
  
    const tresMelhoresNotas = notasOrdenadas.slice(0, 3);

    
    const somaNotas = tresMelhoresNotas.reduce((acumulador, nota) => acumulador + nota, 0);

   
    return somaNotas / tresMelhoresNotas.length;
};

const notas = [5, 8, 9, 3, 10, 7];
let mediaTresMelhores = calcularMedia(notas);

console.log("Notas originais:", notas); // [5, 8, 9, 3, 10, 7]
console.log("Média das três melhores notas:", mediaTresMelhores); 

/**att 3 */

const somarNumeros = (array) => {
    let soma = 0;
    for (let index in array) {
        const numero = array[index];
        // Verifica se o número é divisível por 2 e por 3
        if (numero % 2 === 0 && numero % 3 === 0) {
            soma += numero;
        }
    }
    return soma;
};

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];
let soma = somarNumeros(numeros);

console.log("Números:", numeros); 
console.log("Soma dos números divisíveis por 2 e 3:", soma); 

/**att 4 */

const obterMaior = (array) => {
    if (array.length === 0) {
        return undefined; // Ou lançar um erro, dependendo do tratamento desejado
    }
    let maior = array[0];
    for (const numero of array) {
        if (numero > maior) {
            maior = numero;
        }
    }
    return maior;
};

const obterMenor = (array) => {
    if (array.length === 0) {
        return undefined; // Ou lançar um erro
    }
    let menor = array[0];
    for (const numero of array) {
        if (numero < menor) {
            menor = numero;
        }
    }
    return menor;
};

const numerosMaiorMenor = [-1, 3, 8, -2, 4, 10];
let maior = obterMaior(numerosMaiorMenor);
let menor = obterMenor(numerosMaiorMenor);

console.log("Números para Maior e Menor:", numerosMaiorMenor); // [-1, 3, 8, -2, 4, 10]
console.log("Maior:", maior); // Resultado esperado: 10
console.log("Menor:", menor); // Resultado esperado: -2

/**att 5 */

const exibirNomes = (nomes) => {
    nomes.forEach(nome => {
        console.log(`Bem-vindo, ${nome}!`);
    });
};

const nomes = ['Lucas', 'Marina', 'João'];
console.log("Exibindo nomes formatados:");
exibirNomes(nomes);

/**att 6 */

const converterMoeda = (precosDolares) => {
    const precosReais = precosDolares.map(precoDolar => precoDolar * 5);
    return precosReais;
};

const precosDolares = [10, 20, 30];
let precoReais = converterMoeda(precosDolares);

console.log("Preços em dólares:", precosDolares); // [10, 20, 30]
console.log("Preços convertidos para reais:", precoReais); // Resultado esperado: [50, 100, 150]

/** att 7 */
const filtrarDevedores = (dividas) => {
    const devedores = dividas.filter(divida => divida > 80.00);
    return devedores;
};

const dividas = [95.90, 180.50, 22.99, 105.99, 30.50];
const devedores = filtrarDevedores(dividas);

console.log("Todas as dívidas:", dividas); // [95.90, 180.50, 22.99, 105.99, 30.50]
console.log("Dívidas que ultrapassam R$ 80,00:", devedores); // Resultado esperado: [95.90, 180.50, 105.99]

/**att 8 */

const calcularTotalVendas = (vendas) => {
    const totalVendas = vendas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    return totalVendas;
};

const vendas = [150, 200, 100, 50];
let totalVendas = calcularTotalVendas(vendas);

console.log("Valores das vendas:", vendas); // [150, 200, 100, 50]
console.log("Total de vendas:", totalVendas); // Resultado esperado: 500
