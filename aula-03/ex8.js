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

    do {
        senha = Number(prompt(`Digite a senha!`))

        if (senha != 1234) {
            alert(`Senha incorreta!`)
            alert(`Tente novamente!`)
        } else {
            alert(`Acesso liberado!`)
        }

    } while (senha != 1234);