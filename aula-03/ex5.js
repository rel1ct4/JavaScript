/**## 🔹 Exercício 5 - Imprimindo Intervalo
**Descrição:** Crie um programa  que leia dois números inteiros: **um valor inicial** e **um valor final**. O programa deve então imprimir todos os números do valor inicial até o valor final, **inclusive**.

**Exemplo de:**
- Entrada:
    ```css
        Valor inicial: 5
        Valor final: 10
    ```

- Saída:
    ```yaml
        5 6 7 8 9 10
    ```

--- */

let inicial = Number(prompt(`Digite um valor inicial!`))
let final = Number(prompt(`Digite um valo final`))

do {
    alert(`${inicial}`)
    inicial++
} while (inicial != final + 1);