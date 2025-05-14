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

alert(`Atividade 1`)

AnoAtual = Number(prompt("Qual o ano atual?"))
DataNascimento = Number(prompt("Qual a sua data de nascimento?"))

idade = AnoAtual - DataNascimento

if(idade >= 18){
    alert(`Você pode tirar habilitação já que esse ano possui ${idade} anos!`)

}else{
    alert(`Você não pode tirar a habilitação já que durante esse ano você tem ${idade} anos!`)
}

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

let idadee = 0;

alert(`Atividade 2`)

idadee = Number(prompt(`Qual a sua idade?`))

if(idadee > 65){
    alert(`Você é idoso!`)

}else if(idadee < 65 && idadee >= 18){
    alert(`Você é um adulto!`)

}else if( idadee < 18 && idadee > 13){
     alert(`Você é um adolescente!`)

}else if(idadee < 13 && idadee > 0){
    alert(`Você é uma criança!`)

}else{
    alert(`Número inválido`)
}

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

alert(`Atividade 3`)

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

alert(`Atividade 4`)

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

alert(`Atividade 5`)

let inicial = Number(prompt(`Digite um valor inicial!`))
let final = Number(prompt(`Digite um valo final`))

do {
    alert(`${inicial}`)
    inicial++
} while (inicial != final + 1);

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

alert(`Atividade 6`)

numero = Number(prompt(`Digite um número!`))

let resultado = 0

for (let i = 0; i < numero; i++) {

    if(i % 2 === 0){
        resultado += i
        console.log(resultado)
    
    }
    console.log(i)
}


alert(`A soma dos números de 1 até ${numero} é ${resultado}`)

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

let numeroo, positivo = 0 , negativo = 0

alert(`Atividade 7`)

do {
   numeroo = Number(prompt(`Digite um número!`))

   if (numeroo > 0) {
        positivo ++

   } else if(numeroo < 0) {
        negativo ++

   }else{
    alert(`Quantidade de números positivos: ${positivo}
        Quantidade de números negativos: ${negativo}`)
   }
    
} while (numeroo != 0);

/**🔹 Exercício 8 - Digite a Senha
**Descrição:** Crie um programa que solicite **uma senha ao usuário** e continue pedindo até que ele digite a senha correta. A senha correta deve estar definida no próprio programa. Ao acertar, exiba uma mensagem de acesso liberado.
Use o laço `do-while` para garantir que o programa solicite a senha pelo menos uma vez.

**Exemplo de:**
- Entrada:
    ```css
    Digite a senha: 0000
    Digite a senha: 4321
    Digite a senha: 1234
    ```
 
* Saída:
    ```css
    Senha incorreta. Tente novamente.
    Senha incorreta. Tente novamente.
    Acesso liberado.
    ``` */

    let senha = 0

    alert(`Atividade 8`)

    do {
        senha = Number(prompt(`Digite a senha!`))

        if (senha != 1234) {
            alert(`Senha incorreta!`)
            alert(`Tente novamente!`)
        } else {
            alert(`Acesso liberado!`)
        }

    } while (senha != 1234);