//  As funções "append()" e "appendTo()" adicionam um elemento a outro elemento.
//  A diferença é que com o "append()", o argumento da função é o próprio elemento que será adicionado. Já no "appendTo()", o argumento é o elemento que receberá o outro elemento

let r,g,b

$("#btnAdicionar").click(() => {

    //  Define um número entre 0 e 1, multiplica por 255 e o arredonda para baixo
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)

    $("#caixa").append("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'></div>")

});

$("#btnAdicionar5").click(() => {

    for(let i = 0; i < 5; i++){

        r = Math.floor(Math.random()*255)
        g = Math.floor(Math.random()*255)
        b = Math.floor(Math.random()*255)

        $("<div class='subcaixa' style='background-color: rgb("+r+","+g+","+b+")'></div>").appendTo($("#caixa"))
    }

});