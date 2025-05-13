/**## 🔹 Exercício 1 - Habilitação
**Descrição:** Crie um programa que leia o **ano de nascimento** do usuário e o **ano atual**. Com base nesses dados, calcule a **idade** e exiba uma mensagem informando:

- Quantos anos o usuário completa no ano atual
- E se ele **pode ou não tirar a habilitação**, considerando que a idade mínima é 18 anos.

**Exemplo de:**
- Entrada:
    ```css
    Digite o ano de nascimento: 2006
    Digite o ano atual: 2025
    ```

- Saída:
    ```css
    Você completa 19 anos em 2025 e poderá tirar a habilitação.
    ```

**Outro exemplo:**
- Entrada:
    ```css
    Digite o ano de nascimento: 2010
    Digite o ano atual: 2025
    ```
 
- Saída:
    ```css
    Você completa 15 anos em 2025 e ainda não poderá tirar a habilitação.
    ```

--- */

let idade = 0;
let AnoAtual = 0;
let DataNascimento = 0;

AnoAtual = Number(prompt("Qual o ano atual?"))
DataNascimento = Number(prompt("Qual a sua data de nascimento?"))

idade = AnoAtual - DataNascimento

if(idade >= 18){
    alert(`Você pode tirar habilitação já que esse ano possui ${idade} anos!`)

}else{
    alert(`Você não pode tirar a habilitação já que durante esse ano você tem ${idade} anos!`)
}