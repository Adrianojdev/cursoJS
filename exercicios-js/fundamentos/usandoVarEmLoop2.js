const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// retorna 10 em qualquer chamada, tipo um 'bug' com a var em js

funcs[2] ();
funcs[8] ();