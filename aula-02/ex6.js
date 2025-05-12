/**## Exercício 6 - IMC
**Descrição:** Crie um programa em JavaScript que solicite ao usuário seu nome, peso (em kg) e altura (em metros). Em seguida, calcule o IMC (Índice de Massa Corporal) utilizando a fórmula:

```ini
IMC = peso / (altura * altura)
```

Depois, utilize a função `confirm()` para exibir uma mensagem de confirmação com os dados inseridos.

Se o usuário confirmar que os dados estão corretos, exiba uma mensagem no formato: `"Nome, seu IMC é X"`, onde Nome é o nome informado e X é o IMC calculado.

Caso o usuário cancele, exiba a mensagem: `"Você saiu do programa."`

**Exemplo de:** 
**Entrada:**
```css
Nome: João
Peso: 80
Altura: 1.75
```

**Confirmação:**
```css
Seus Dados:
Nome: João
Peso: 80 kg
Altura: 1.75 m
Deseja continuar?
```

**Saída:**
```yaml
João, seu IMC é 26.12
```

--- */
 
let nome, altura, peso, IMC, confirmacao

nome = prompt("Qual seu nome?")
altura = prompt(`${nome}, qual sua altura?`)
peso = prompt(`${nome}, qual seu peso?`)

IMC = peso / (altura* altura)

confirmacao = confirm(`Seus Dados:
    Nome: ${nome}
    Peso: ${peso}
    Altura: ${altura}
    Deseja continuar?`)

confirmacao === true ? alert(`${nome}, seu IMC é ${IMC}`) : alert(`${nome}, você saiu do programa`)