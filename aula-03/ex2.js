/**## 🔹 Exercício 2 - Faixa Etária
**Descrição:** Crie um programa que solicite ao usuário sua **idade** e, com base na idade fornecida, imprima uma mensagem indicando a faixa etária correspondente:

- Idade **maior ou igual** a 65: `Você é um idoso.`
* Idade **maior ou igual** a 18: `Você é um adulto.`
- Idade **maior ou igual** a 13: `Você é um adolescente.`
* **Senão** a saída deve ser: `Você é uma criança.`

**Exemplo de:**
- Entrada:
    ```yaml
    Qual a sua idade ? 30
    ```

- Saída:
    ```css
    Você é um adulto. 
    ```

--- */

let idade = 0;

idade = Number(prompt(`Qual a sua idade?`))

if(idade > 65){
    alert(`Você é idoso!`)

}else if(idade < 65 && idade >= 18){
    alert(`Você é um adulto!`)

}else if( idade < 18 && idade > 13){
     alert(`Você é um adolescente!`)

}else if(idade < 13 && idade > 0){
    alert(`Você é uma criança!`)

}else{
    alert(`Número inválido`)
}