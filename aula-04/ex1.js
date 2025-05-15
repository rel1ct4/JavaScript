/**## Exercício 1 - Saudação Personalizada
**Descrição:** Crie uma função chamada saudacao que receba um nome e imprima uma saudação personalizada. Caso nenhum nome seja fornecido, use "visitante". */

function saudacao(nome) {
    if(nome === ""){
        alert(`Bem-vindo visitante`)

    }else{
        alert(`seja bem-vindo ${nome}`)
    }
    
}

let visitante = prompt(`Qual seu nome?`)

saudacao(visitante)