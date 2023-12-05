//  O método "queue()" é um método que retorna a fila de animações. Com a propriedadde "length" obtemos a quantidade de animações na fla
//  Toda vez que uma animação terminar a função "text()" é chamada alterando o texto do elemento de id "info"
const cx = $("#caixa");

$("#btnAumentar").click(function(){

    $("#caixa").animate({width: "100%"}, {duration: 5000, complete: () => {
        $("#info").text(cx.queue().length)
    }})

    $("#info").text(cx.queue().length)
});

$("#btnDiminuir").click(function(){

    $("#caixa").animate({width: "100px"}, {duration: 5000, complete: () => {
        $("#info").text(cx.queue().length)
    }})

    $("#info").text(cx.queue().length)
});

$("#btnFinalizar").click(function(){

    $("#caixa").finish();

});


