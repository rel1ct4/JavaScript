/**## Exercício 1 - Cadastro de Usuário
**Descrição:** Crie uma função chamada criarUsuário que receba `nome`, `idade` e `e-mail` como parâmetros e retorne um objeto representando o produto com essas propriedades.

**Exemplo de uso:**
```js
const usuario = criarUsuario("Jorge", 17, "jorginho@hotmail.com");
```

---

## Exercício 2 - Atualizar Idade
**Descrição:** Crie uma função chamada atualizarIdade que receba um **objeto** usuario e um **número** representando a nova idade do usuário. A função deve atualizar o valor da propriedade idade.

**Exemplo de uso:**
```js
const usuario = { nome: "Marcos", idade: 19, email: "marquinhos@hotmail.com" };

atualizarNome(usuario, 25);

console.log(usuario.idade);  
// Resultado esperado: 25
```
 */

const CriarUsuarios = (nome, idade, email) => {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
}

const user = new CriarUsuarios("ana", 17, "ana@dsa"); //new nesse caso serve para criar o objeto


console.log(user);


const atualizarIdade = (user, idade) =>{
    user.idade = idade

}

atualizarIdade(user, 18)

console.log(atualizarIdade)