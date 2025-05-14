let nome, numero, dificuldade, dificuldadeCalc, modo, sorteio, continuar, melhorJogadorNome, melhorJogadorTentativas

continuar = "SIM"
contador = 0 

while (continuar === "SIM") {
    alert(`Seja bem-vindo jogador!`)

    nome = prompt(`Qual o seu nome?`)
    dificuldade = prompt(`Qual vai ser a dificuldade(fácil ou dificil)?`)

    dificuldadeCalc = dificuldade === "fácil"? dificuldadeCalc = 10 : dificuldadeCalc = 50
    modo = dificuldade === "fácil"? modo = 100 : modo = 500
    numero = Math.ceil(Math.random() * dificuldadeCalc)
    alert(`Olá ${nome}, preparando o jogo...`)

    sorteio = Number(prompt(`Um número de 1 a 100 foi sorteado! Tente adivinhar qual é. Boa sorte!`))

    for (let i = 0; sorteio != numero; i++) {

        if(sorteio > numero){
          sorteio = Number(prompt(`O número é maior que o sorteado!`))
        }else{
         sorteio = Number(prompt(`O número é menor do que o sorteado!`))
        }
         
        if(i < 3){
            alert(`Uau! Você é um gênio da adivinhação! 🧠`)

        }else if(i > 3 && i < 7){
            alert(`Muito bem! Você foi rápido! 🚀`)

        }else{
            alert(`Conseguiu! Persistência é tudo! 💪`)
        }

        if( melhorJogadorTentativas > i ){
            melhorJogadorNome = nome 
            melhorJogadorTentativas = i
        }
    }
    continuar = toUpperCase(prompt(`Deseja jogar novamente?(SIM/NÃO)?`));
}
