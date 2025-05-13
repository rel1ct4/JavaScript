/**## 🔹 Exercício 3 - Classificação de IMC
**Descrição:** Crie um programa que solicite ao usuário o seu **peso** (em kg) e sua **altura** (em metros). Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:

```ini
IMC = peso / (altura * altura)
```

Após o cálculo, exiba o **valor do IMC** e, de acordo com o valor obtido, informe a **classificação** do IMC:

- **Abaixo de 18.5**: `Abaixo do peso`
- **Entre 18.5 e 24.9**: `Peso normal`
- **Entre 25 e 29.9**: `Sobrepeso`
- **Entre 30 e 34.9**: `Obesidade grau 1`
- **Entre 35 e 39.9**: `Obesidade grau 2`
- **Acima de 40**: `Obesidade grau 3`

**Exemplo de:**
- Entrada:
    ```css
        Peso (kg): 70
        Altura (m): 1.75
    ```

- Saída:
    ```yaml
    Seu IMC é: 22.86
    Você tem peso normal.
    ```

--- */

let imc = Number;
let altura = Number;
let peso = Number;

altura = prompt(`Qual a sua altura?`)
peso = prompt(`Qual o seu peso?`)

imc = peso / (altura * altura)

if(imc < 18.5){
    alert(`Seu imc é ${imc}, Você está abaixo do peso!`)

}else if(imc >= 18.5 && imc < 24.9){
    alert(`Seu imc é ${imc}, Peso normal`)

}else if(imc >= 24.9 && imc < 29.9){
    alert(`Seu imc é ${imc}, Sobrepeso`)
}else if(imc >= 29.9 && imc < 34.9){
    alert(`Seu imc é ${imc}, Obesidade grau 1`)

}else if(imc >= 34.9 && imc < 39.9){
    alert(`Seu imc é ${imc}, Obesidade grau 2`)
    
}else{
    alert(`Seu imc é ${imc}, Obesidade grau 3`)
}


