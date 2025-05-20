/**# Exercício 1 - Gerenciador de Lista de Tarefas
**Descrição:** Crie uma função chamada `gerenciarTarefas` que recebe um array de tarefas e uma ação a ser realizada. As ações possíveis são:

- **"adicionarInicio"**: adiciona uma nova tarefa no início da lista.
- **"adicionarFim"**: adiciona uma nova tarefa no final da lista.
- **"removerInicio"**: remove a primeira tarefa da lista.
- **"removerFim"**: remove a última tarefa da lista.

A função deve receber dois parâmetros: o **array** de tarefas e a **ação** a ser realizada. Se a ação for `"adicionarInicio"` ou `"adicionarFim"`, a função também deve receber um terceiro parâmetro com a tarefa a ser adicionada.

**Exemplo de uso:**
```js
const tarefas = ["Estudar", "Treinar", "Ler"];  

gerenciarTarefas(tarefas, "adicionarFim", "Dormir");  

console.log(tarefas);

// Resultado esperado: ["Estudar", "Treinar", "Ler", "Dormir"]
```

--- */

const tarefas = ["Estudar", "Treinar", "Ler"];

const gerenciarTarefas = (array, acao, tarefa) =>{
    if(acao === 1){
        tarefa = prompt("Qual a tarefa a ser adicionada?")
        array.unshifit(tarefa)

    }else if(acao === 2){
        tarefa = prompt("Qual a tarefa?")
        array.push(tarefa)

    }else if(acao === 3){
        array.shift()

    }else if(acao === 4){
        array.pop()

    }else{
        alert("Escolha uma das opções acima")
    }

}

alert("adicionarInicio = 1, adicionarFim = 2, removerInicio = 3 removerFim = 4")
let acao = Number(prompt("Qual vai ser a sua ação?"))

gerenciarTarefas(tarefas, acao)

console.log(tarefas)