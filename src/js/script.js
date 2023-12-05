//  As funções "prepend()" e "prependTo()" adicionam um elemento ao INÍCIO de outro elemento.
//  A diferença é que com o "prepend()", o argumento da função é o próprio elemento que será adicionado. Já no "prependTo()", o argumento é o elemento que receberá o outro elemento

let r,g,b
let num = 0

$("#btnAdicionar").click(() => {

    //  Define um número entre 0 e 1, multiplica por 255 e o arredonda para baixo
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)

    num++

    $("#caixa").prepend("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'>"+num+"</div>")

});

$("#btnAdicionar5").click(() => {

    for(let i = 0; i < 5; i++){

        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)

        num++

        $("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'>"+num+"</div>").prependTo($("#caixa"))
    }

});