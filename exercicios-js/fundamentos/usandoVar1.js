{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera);
            }
        }
    }
}
// outras linguagens a variavel só seria visivel dentro do bloco
console.log(sera);

// variavel declarada dentro da função fica visivel apenas dentro da funcão
function teste() {
    var local = 123;
    console.log(local)
}

teste();
// console.log(local)