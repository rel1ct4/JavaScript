/**## 🔹 Exercício 4 - Calculadora Simples 1
**Descrição:** Escreva um programa que simule uma calculadora simples. O programa deve ler dois números inteiros e o tipo de operação a ser realizada (soma, subtração, multiplicação ou divisão). A operação será escolhida pelo usuário, utilizando um número que representará cada operação:

- **1** para soma
- **2** para subtração
- **3** para multiplicação
- **4** para divisão

Use o comando `switch` para escolher a operação e, ao final, exiba o resultado da operação escolhida.

**Exemplo de:**
- Entrada:
    ```css
    Digite o primeiro número: 10
    Digite o segundo número: 5

    --- Operações ---
    1 - soma 
    2 - subtração 
    3 - multiplicação
    4 - divisão
    -----------------

    Escolha uma operação: 1
    ```

- Saída:
    ```yaml
    Resultado da soma: 15
    ```

--- */

let primeiro, segundo, opcao, operacao

primeiro = Number(prompt(`Digite seu primeiro número!`))
segundo = Number(prompt(`Digite seu egundo número!`))

alert(`--- Operações ---
    1 - soma 
    2 - subtração 
    3 - multiplicação
    4 - divisão
    -----------------
`)

opcao = Number(prompt(`Escolha sua opção!`))

switch (opcao) {
    case 1:
        alert(`Resultado da soma: ${primeiro + segundo}`)
        break;

    case 2:
        alert(`Resultado da subtração: ${primerio - segundo}`)
        break;

    case 3:
        alert(`Resultado da multiplicação: ${primerio * segundo}`)
        break;

    case 4:
        alert(`Resultado da divisão: ${primeiro / segundo}`)
        break;
}

