/**## Exercício 5 - Processando dois Usuários
**Descrição:** Você está criando uma função que vai exibir mensagens personalizadas para dois usuários.
Crie uma função chamada `exibirMensagem` que receba dois nomes (ex: `nome1` e `nome2`) e uma **função de callback**. O callback deve ser aplicado individualmente a cada nome e as mensagens devem ser exibidas com `console.log`. Em seguida, utilize `exibirMensagem` com um callback que retorne "Olá, [nome]! Que bom ver você aqui!".

--- */

function Mensagem(nome){
    return `Olá, ${nome}! Que bom ter você aqui!`
}

function ExibirMensagem(nome1, nome2, callback){

     console.log(callback(nome1))
     console.log(callback(nome2))

}

ExibirMensagem("Ana", "Gabi", Mensagem)