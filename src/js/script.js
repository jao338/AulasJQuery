//  A função "finish()" pula a animação para o final
$("#btnAumentar").click(function(){

    $("#caixa").animate({width: "100%"}, 5000)

});

$("#btnDiminuir").click(function(){

    $("#caixa").animate({width: "100px"}, 5000)

});

$("#btnFinalizar").click(function(){

    $("#caixa").finish();

});


