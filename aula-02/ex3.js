/****Descrição:** Peça ao usuário sua idade usando `prompt`. Com base na idade, defina uma variável `permitido` que será **true** se a idade for maior ou igual a 18, e **false** caso contrário. Mostre com `alert` uma mensagem do tipo: `"Entrada permitida"` ou `"Entrada negada"`.

**Exemplo de:**
**Entrada:**
```css
Informe sua idade: 17
```

**Saída:**
```yaml
Entrada negada
``` */

let idade

idade = prompt("Qual a sua idade? ")
idade >= 18 ? idade = true : idade = false

idade === true ? alert("Entrada permitida!") : alert("Entrada negada!")