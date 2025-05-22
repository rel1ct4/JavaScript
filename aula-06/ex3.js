/**## Exercício 3 - Explorador de Objetos
**Descrição:** Crie uma função chamada `explorarObjeto` que recebe dois parâmetros um **objeto** e uma **operação**, que pode ser `"chaves"`, `"valores"` ou `"entradas"`. A função deve retornar, respectivamente:

- Para `"chaves"`: um array com as propriedades (usar `Object.keys`)
- Para `"valores"`: um array com os valores (usar `Object.values`)
- Para `"entradas"`: um array com pares [chave, valor] (usar `Object.entries`)

Se for passada uma operação inválida, a função deve retornar a mensagem: `"Operação inválida."`

**Exemplo de uso:**
```js
const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

console.log(explorarObjeto(pessoa, "chaves"));
// Resultado esperado: ["nome", "idade", "cidade"]

console.log(explorarObjeto(pessoa, "valores"));
// Resultado esperado: ["Ana", 28, "Recife"]

console.log(explorarObjeto(pessoa, "entradas"));
// Resultado esperado: [["nome", "Ana"], ["idade", 28], ["cidade", "Recife"]]

console.log(explorarObjeto(pessoa, "teste"));
// Resultado esperado: "Operação inválida."
```
 */

const pessoa = {
  nome: "Ana",
  idade: 28,
  cidade: "Recife"
};

const explorarObjeto = (obj, op) => {
    if(op === "chaves"){
        return obj.keys

    }else if(op === "valores"){
        return obj.values

    }else if(op === "entradas"){
        return obj.entries

    }else{
        alert("Operação inválida!")
        return
    }

}

console.log(explorarObjeto(pessoa, "chaves"))
console.log(explorarObjeto(pessoa, "valores"))