// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 10, 5, 6); // vai somar os 2 e ignorar o resto
imprimirSoma(); // Diferente de outras linguagens ele não da erro, só retorna "not a number"

// Funcao com retorno
function soma(a, b = 1) { //se não ouver valor informado o B atribui o 1 e o a continua undefined 
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
