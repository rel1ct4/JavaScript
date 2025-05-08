/**## Exercício 4 - Estoque Simples
**Descrição:** Crie um programa que simule um estoque. Peça ao usuário: quantidade atual no estoque (number) e a quantidade que deseja remover (number). Mostre no console: se a quantidade for válida (não negativa), mostre `"Estoque atualizado: X"`. Caso contrário, mostre `"Operação inválida: quantidade insuficiente no estoque"`.


**Exemplo de:**
**Entrada:**
```css
Estoque: 30
Remover: 20
```

**Saída:**
```yaml
Estoque atualizado: 10
``` */

let estoque, estoqueAtual, remover

estoque = prompt("Quantidade atual do estoque")
remover = prompt("Quantidade que deseja remover")

estoqueAtual