/**## 🔹 Exercício 6 - Soma dos Pares
**Descrição:** Crie um programa que leia um número inteiro N e calcule a **soma de todos os números pares de 1 até N**. O programa deve utilizar um laço de repetição para percorrer os números de 1 até N, somando apenas os números pares.

**Exemplo de:** 
- Entrada:
    ```css
    N: 10
    ```

- Saída:
    ```css
    A soma dos números pares de 1 até 10 é: 30
    ```

--- */

let numero 

numero = Number(prompt(`Digite um número!`))

let resultado = 0

for (let i = 0; i < numero; i++) {

    if(numero % 2 === 0){
        resultado += i
        console.log(resultado)
    
    }
    console.log(i)
}


alert(`A soma dos números de 1 até ${numero} é ${resultado}`)