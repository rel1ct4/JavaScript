/**🔹 Exercício 7 - Positivos e Negativos
**Descrição:** Crie um programa que leia números inteiros da entrada até que o número digitado seja **0**. Para cada número, o programa deve verificar se ele é **positivo** ou **negativo**. Ao final, o programa deve informar a quantidade de números positivos e a quantidade de números negativos digitados.

**Exemplo de:** 
- Entrada:
    ```css
        3
        -2
        5
        -1
        0
    ```

- Saída:
    ```yaml
        Quantidade de números positivos: 3
        Quantidade de números negativos: 2
    ```

---
 */

let numero, positivo = 0 , negativo = 0


do {
   numero = Number(prompt(`Digite um número!`))

   if (numero > 0) {
        positivo ++

   } else if(numero < 0) {
        negativo ++

   }else{
    alert(`Quantidade de números positivos: ${positivo}
        Quantidade de números negativos: ${negativo}`)
   }
    
} while (numero != 0);