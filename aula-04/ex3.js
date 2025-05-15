/**## Exercício 3 - Saudação com Horário
**Descrição:** Você está desenvolvendo uma funcionalidade para exibir uma saudação diferente dependendo da hora do dia. Crie uma **função anônima** atribuída à variável `mensagemDeBoasVindas` que receba o nome de uma pessoa e a hora atual (de 0 a 23).

A função deve retornar:
- "Bom dia, [nome]!" se a hora estiver entre 6 e 11.
- "Boa tarde, [nome]!" se a hora estiver entre 12 e 17.
- "Boa noite, [nome]!" se a hora estiver entre 18 e 23.
- "Olá, [nome]!" nos demais casos.
 */

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