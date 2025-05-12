/**## Exercício 5 - Exclusão de Conta
**Descrição:** Use o `confirm()` para perguntar ao usuário se ele deseja excluir sua conta. Se confirmar, use `alert()` para mostrar: `"Conta excluída com sucesso"`. Caso contrário, mostre: `"Ação cancelada pelo usuário"`.

**Exemplo de:**
**Entrada:**
```css
(confirm): Clica em "OK"
```

**Saída:**
```yaml
Conta excluída com sucesso. */

const user = confirm("Deseja excluir su conta?")

user === true ? alert("Conta excluída com sucesso!"): alert("Ação cancelada pelo usúario!")