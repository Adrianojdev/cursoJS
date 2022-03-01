const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

// array sempre fica entre []

valores[4] = 10; //adiciona elemento ao array
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // retira e retorna ultimo valor do array
delete valores [0]; // retira valor do array
console.log(valores);

console.log(typeof valores);