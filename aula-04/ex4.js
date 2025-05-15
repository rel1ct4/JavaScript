/**## Exercício 4 - Cálculo de Desconto
**Descrição:** Você está ajudando a montar um sistema de compras online. Crie uma **arrow function** chamada `calcularDesconto` que receba dois parâmetros: preco e porcentagemDesconto, e retorne o valor com desconto aplicado. Depois, calcule o preço final de um produto que custa R$ 200 com 10% de desconto. */

const calcularDesconto = (preco, porcentagemDesconto) => {
    
    let desconto = preco *(porcentagemDesconto/preco)
    let valorFinal = preco - desconto
    alert(`O valor da compra é ${preco} e o desconto aplicado foi de ${desconto}, assim o resultado foi de ${valorFinal}`)
}

let preco = Number(prompt("Qual foi o preço do produto?"))
let porcentagem = Number(prompt("Qual foi a porcentagem de desconto?"))

calcularDesconto(preco, porcentagem)