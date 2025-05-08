/**## Exercício 2 - Desconto Progressivo
**Descrição:** Crie um programa que peça ao usuário o valor de uma compra. Se o valor for maior que 100, aplique 10% de desconto. Caso contrário o desconto será de 5%.


**Exemplo de:**
**Entrada:**
```yaml
Informe o valor da compra: 120
```

**Saída:**
```css
Valor original: R$ 120.00
Desconto aplicado: R$ 12.00
Valor final: R$ 108.00
``` */

let compra, desconto, valor

compra = Number(prompt("Qual o valor da compra? "))

//Com if else
/**if(compra >= 100){
    desconto = compra * (10/compra) 
    valor = compra - desconto
    console.log(`Valor original: R$ ${compra}`)
    console.log(`Desconto aplicado: R$ ${desconto}`)
    console.log(`Valor final: R$ ${valor}`)
} else{
    desconto = compra * (5/compra)
    valor = compra - desconto
    console.log(`Valor original: R$ ${compra}`)
    console.log(`Desconto aplicado: R$ ${desconto}`)
    console.log(`Valor final: R$ ${valor}`)
}
 */
//Com operador ternário
compra > 100 ?
    desconto = compra * (10/compra)
    valor = compra - desconto 
    console.log(`Valor original: R$ ${compra}`) 
    console.log(`Desconto aplicado: R$ ${desconto}`) 
    console.log(`Valor final: R$ ${valor}`) 
    :
    desconto = compra * (5/compra)
    valor = compra - desconto
    console.log(`Valor original: R$ ${compra}`)
    console.log(`Desconto aplicado: R$ ${desconto}`)
    console.log(`Valor final: R$ ${valor}`)

