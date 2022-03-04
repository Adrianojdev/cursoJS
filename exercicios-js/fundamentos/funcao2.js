// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);

//armazenando uma funcao arrow em uma variável
const soma = (a, b) => { //seta => forma reduzida de function
    return a + b;
}

console.log(soma(2, 3));

// retorno implicito
const subtracao = (a, b) => a - b; // quando nao abro chaves indica que a funcao vai ser de linha unica
console.log(subtracao(2, 3));

const imprimir2 = a => console.log(a);
imprimir2("Legal!!")
// outra forma de reduzir a function