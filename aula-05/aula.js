const numeros = [2, 4, 9, 16, 12];

numeros[0] = 1
numeros[1] = 2
numeros[2] = 3

console.log(numeros)


const notas = [7.6, 4.5, 8.7]

console.log(notas);

//reduce

const soma = numeros.reduce((acumulador, atual , indice) => {
    console.log(`Indice: ${indice} = acumulador: ${acumulador} = Atual: ${atual}`)
    return acumulador + atual;
}, 0)

console.log(soma)