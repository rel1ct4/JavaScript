/**## Exercício 6 - Verificador de Idade
**Descrição:** Crie uma função chamada `verificarIdade` que receba dois parâmetros: **nome** (com valor padrão "visitante") e **idade**. A função não deve retornar **nenhum valor**, apenas exibir uma mensagem com `alert` informando:

- "Olá, [nome]! Você é menor de idade." se a idade for menor que 18.
- "Olá, [nome]! Você é maior de idade." se a idade for 18 ou mais.

Antes de exibir a mensagem, verifique se a idade informada é válida: ela não pode ser negativa nem ultrapassar um valor máximo definido (por exemplo, 120). O programa deve começar perguntando ao usuário, por meio de `confirm`, se ele deseja verificar uma idade. Enquanto a resposta for positiva, utilize `prompt` para solicitar o **nome** e a **idade** da pessoa, e chame a função `verificarIdade`. O processo deve se repetir até que o usuário decida encerrar.
--- */

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