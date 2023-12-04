//  O método "delay()" define um intervalo de tempo(ms)
$("#btn-aumentar").click(function() {

    $("#caixa").delay(2000).animate({width: "500px"}).delay(2000).animate({height: "500px"})
});

$("#btn-diminuir").click(function() {

    $("#caixa").delay(2000).animate({width: "200px"}).delay(2000).animate({height: "200px"})
});

$("#btn-mostrar").click(function() {

    $("#caixa").delay(2000).animate({opacity: "toggle"}).delay(2000).animate({opacity: "toggle"})
});


