const escola = "cod3r";

console.log(escola.charAt(4)); // letra da posição 4
console.log(escola.charAt(5)); // vazio
console.log(escola.charCodeAt(3)); //codigo unicode
console.log(escola.indexOf('3'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); //substitui posicao 3
console.log(escola.replace(/\w/g, 'e')); //substitui todos digitos pela letra
console.log(escola.replace(/\d/, 'e')); //substitui digito pelo informado

console.log('Ana,Maria,Pedro'.split(',')); // gera o array com 3 elementos separados pela virgula
