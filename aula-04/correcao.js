/**## Exercício 1 - Saudação Personalizada
**Descrição:** Crie uma função chamada saudacao que receba um nome e imprima uma saudação personalizada. Caso nenhum nome seja fornecido, use "visitante". */
alert("Atividade 1")
function saudacao(nome) {
    if(nome === ""){
        alert(`Bem-vindo visitante`)

    }else{
        alert(`seja bem-vindo ${nome}`)
    }
    
}

let visitante = prompt(`Qual seu nome?`)

saudacao(visitante)

/**## Exercício 2 - Calculadora Simples 2
**Descrição:** Crie uma função chamada calcular que recebe três parâmetros: dois números e um operador (+, -, *, /, %). A função deve retornar o resultado da operação correspondente. Defina valores padrões para os parâmetros para o caso do usuário não informá-los.O programa deve verificar se é possível realizar as operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (sim ou não). Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa. */

alert("atividade 2")

function calcular(num1, op, num2 ) {
    let calc
     if(op === "+"){
       calc = num1 + num2

    } else if(op === "-"){
        calc = num1 - num2

    }else if(op === "*"){
        calc = num1 * num2

    }else if(op === "/"){
        

        if(num2 === 0){
            alert(`Não é tem como dividir um número por 0`)
            return

        }else {
            calc = num1 / num2

        }

    }else if(op === "%"){
        if(num2 === 0){
            alert(`Não é tem como dividir um número por 0`)
            return
        }else {
            calc = num1 % num2
        }

    }else if(op === ""){
        calc = num1 + num2

    }else if(num1 === "" ){
        num1 = 0

    }else if(num2 === ""){
        num2 = 0
    }

    
  
    alert(`o resultado da conta ${num1} ${op} ${num2} é igual a: ${calc}`)

}

            

let numeroo, numero, operador, resposta

do{
numero = Number(prompt(`Qual vai ser o primerio número?`))
numeroo = Number(prompt(`Qual vai ser o segundo número?`))
operador = prompt(`qual vai ser o operador(+, -, *, /, %)?`)

calcular(numero, operador, numeroo)

resposta = prompt("Deseja continuar(S ou N)?")
 } while (resposta === "S");

/**## Exercício 3 - Saudação com Horário
**Descrição:** Você está desenvolvendo uma funcionalidade para exibir uma saudação diferente dependendo da hora do dia. Crie uma **função anônima** atribuída à variável `mensagemDeBoasVindas` que receba o nome de uma pessoa e a hora atual (de 0 a 23).

A função deve retornar:
- "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
- "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
- "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
- "Olá, [nome]!" nos demais casos.
 */

alert("Atividade 3")

const mensagemdeBoasVindas = function(nome, hora){
    if(hora > 6 && hora < 11){
        alert(`Bom dia, ${nome}!`)

    }else if(hora > 11 && hora < 18){
        alert(`Boa tarde, ${nome}!`)

    }else if(hora > 17 && hora < 24){
        alert(`Boa noite, ${nome}!`)

    }else{
        alert(`Olá, ${nome}!`)
    }
}

const nome = prompt(`Qual seu nome?`)
const hora = prompt("Que horas são(1 á 00)?")

mensagemdeBoasVindas(nome, hora)

/**## Exercício 4 - Cálculo de Desconto
**Descrição:** Você está ajudando a montar um sistema de compras online. Crie uma **arrow function** chamada `calcularDesconto` que receba dois parâmetros: preco e porcentagemDesconto, e retorne o valor com desconto aplicado. Depois, calcule o preço final de um produto que custa R$ 200 com 10% de desconto. */

alert("Atividade 4")

const calcularDesconto = (preco, porcentagemDesconto) => {
    
    let desconto = preco *(porcentagemDesconto/preco)
    let valorFinal = preco - desconto
    alert(`O valor da compra é ${preco} e o desconto aplicado foi de ${desconto}, assim o resultado foi de ${valorFinal}`)
}

let preco = Number(prompt("Qual foi o preço do produto?"))
let porcentagem = Number(prompt("Qual foi a porcentagem de desconto?"))

calcularDesconto(preco, porcentagem)

/**## Exercício 5 - Processando dois Usuários
**Descrição:** Você está criando uma função que vai exibir mensagens personalizadas para dois usuários.
Crie uma função chamada `exibirMensagem` que receba dois nomes (ex: `nome1` e `nome2`) e uma **função de callback**. O callback deve ser aplicado individualmente a cada nome e as mensagens devem ser exibidas com `console.log`. Em seguida, utilize `exibirMensagem` com um callback que retorne "Olá, [nome]! Que bom ver você aqui!".

--- */

alert("Atividade 5")

function Mensagem(nome){
    return `Olá, ${nome}! Que bom ter você aqui!`
}

function ExibirMensagem(nome1, nome2, callback){

     console.log(callback(nome1))
     console.log(callback(nome2))

}

ExibirMensagem("Ana", "Gabi", Mensagem)

/**## Exercício 6 - Verificador de Idade
**Descrição:** Crie uma função chamada `verificarIdade` que receba dois parâmetros: **nome** (com valor padrão "visitante") e **idade**. A função não deve retornar **nenhum valor**, apenas exibir uma mensagem com `alert` informando:

- "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
- "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.

Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de `confirm`, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize `prompt` para solicitar o **nome** e a **idade** da pessoa, e chame a função `verificarIdade`. O processo deve se repetir até que o usuário decida encerrar.
--- */

alert("Atividade 6")

function VerificarIdade(nome, idade){
    if(idade > 17 && idade < 121){
        alert(`Olá, ${nome} Você é maior de idade.`)

    }else if(idade > 0 && idade < 19){
        alert(`Olá ${nome}, você é menor de idade!`)

    }else{
        alert(`Olá ${nome}, sua idade ${idade} é inválida!`)
    }
}

do {
    let nome = prompt(`Qual seu nome?`)
    let idade = Number(prompt(`${nome}, qual a sua idade?`))

    VerificarIdade(nome, idade)

    confirm(`${nome}, deseja continuar?`)
} while (confirm = true);