/**## Exercício 2 - Calculadora Simples 2
**Descrição:** Crie uma função chamada calcular que recebe três parâmetros: dois números e um operador (+, -, *, /, %). A função deve retornar o resultado da operação correspondente. Defina valores padrões para os parâmetros para o caso do usuário não informá-los.O programa deve verificar se é possível realizar as operações de divisão e módulo, garantindo que o segundo número não seja zero. Após exibir o resultado, pergunte ao usuário se deseja fazer outro cálculo (sim ou não). Se a resposta for sim, repita o processo; caso contrário, finalize o programa com uma mensagem de encerramento. Certifique-se de validar as entradas e tratar erros para garantir o bom funcionamento do programa. */

function calcular(num1, op, num2 ) {
    let calc
     if(op === "+"){
       calc = num1 + num2

    } else if(op === "-"){
        calc = num1 - num2

    }else if(op === "*"){
        calc = num1 * num2

    }else if(op === "/"){
        

        if(num2 === 0){
            alert(`Não é tem como dividir um número por 0`)
            return

        }else {
            calc = num1 / num2

        }

    }else if(op === "%"){
        if(num2 === 0){
            alert(`Não é tem como dividir um número por 0`)
            return
        }else {
            calc = num1 % num2
        }

    }else if(op === ""){
        calc = num1 + num2

    }else if(num1 === "" ){
        num1 = 0

    }else if(num2 === ""){
        num2 = 0
    }

    
  
    alert(`o resultado da conta ${num1} ${op} ${num2} é igual a: ${calc}`)

}

            

let numeroo, numero, operador, resposta

do{
numero = Number(prompt(`Qual vai ser o primerio número?`))
numeroo = Number(prompt(`Qual vai ser o segundo número?`))
operador = prompt(`qual vai ser o operador(+, -, *, /, %)?`)

calcular(numero, operador, numeroo)

resposta = prompt("Deseja continuar(S ou N)?")
 } while (resposta === "S");