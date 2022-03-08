const funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

// com o let ele retorna a posição chamada

funcs[2] ();
funcs[8] ();
funcs[6] ();