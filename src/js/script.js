//  As função "before()" adiciona um elemento antes de outro elemento. Já a função "after()" adiciona depois de outro elemento

let r,g,b
let num = 0

$("#btnAdicionarAntes").click(() => {

    //  Define um número entre 0 e 1, multiplica por 255 e o arredonda para baixo
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)

    num++

    $("#caixa").before("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'>"+num+"</div>")
});

$("#btnAdicionarDepois").click(() => {

    for(let i = 0; i < 5; i++){

        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)

        num++

        $("#caixa").after("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'>"+num+"</div>")
    }

});

$("#btnAdicionarTextoAntes").click(() => {
    
    $("#caixa2").before(" Curso de jQuery ANTES")
});

$("#btnAdicionarTextoDepois").click(() => {

    for(let i = 0; i < 5; i++){

        $("#caixa2").after(" Curso de jQuery DEPOIS")
    }

});