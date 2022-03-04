let valor; // não inicializada = indefinida
console.log(valor);

valor = null; // ausência de valor, está definida
console.log(valor);
// console.log(valor.toString()) //erro

// zerar valor de uma variável usar null para não ficar indefinida

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evitar usar, se for valor numérico é mais indicado colocar 0 ou null.
console.log(!!produto.preco);
delete produto.preco; //forma correta para remover valor da variável.
console.log(produto);

produto.preco = null; // produto sem preco
console.log(!!produto.preco); // valor booleano

console.log(produto);