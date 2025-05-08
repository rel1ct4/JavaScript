/**## Exercício 1 - Boas-vindas
**Descrição:** Crie um programa que solicite ao usuário os seguintes dados: nome, idade , altura, gênero e estudante.

**Exemplo de:**
**Entrada:**
```css
Qual é o seu nome ? Ana
Qual é sua idade ? 25
Qual a sua altura ? 1.67
Qual o seu gênero ? F
É estudante ? verdadeiro 

**Saída:**
```yaml
Bem-vindo(a), Ana! 
Seu Perfil
Nome: Ana
Idade: 25
Altura: 1.67
Gênero: F
Estudante: verdadeiro
```*/

let nome, idade, altura, genero, estudante

nome = prompt("Qual o seu nome? ")
idade = prompt("Qual a sua idade? ")
altura = prompt("Qual a sua altura? ")
genero = prompt("Qual o seu genêro(F ou M)? ").toUpperCase(genero)
estudante = prompt("Você é um estudante(verdadeiro ou falso)? ")

console.log(`Bem-vindo(a), ${nome}!`)
console.log(`Seu perfil`)
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Altura: ${altura}`)
console.log(`Genêro: ${genero}`)
console.log(`Estudante: ${estudante}`)