//  A função "stop()" recebe dois parametros do tipo boolean. Caso o primeiro parametro seja definido como "true", a fila de animações é limpa. E se caso o segundo parametro for "true", a animação pula para o final. Por padrão, ambos valores são "false".
$("#btnAnimar").click(function() {
    $("#caixa").animate({left: 800}, {duration: 2000})
    $("#caixa").animate({top: 400}, {duration: 2000})
    $("#caixa").animate({left: 0}, {duration: 2000})
    $("#caixa").animate({top: 50}, {duration: 2000})
})

$("#btnProxima").click(function() {
    $("#caixa").stop();
})

$("#btnParar").click(function() {
    $("#caixa").stop(true, false);
})

$("#btnFim").click(function() {
    $("#caixa").stop(false, true);  
})