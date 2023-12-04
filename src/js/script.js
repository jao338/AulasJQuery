//  Na função "animate()", o primeiro conjunto de parametros definem as propriedades e os valores do(s) elemento(s) selecionado(S). O segundo conjunto de parametros definem as propriedades da animação
$("#btn-up").click(function(){
    
    $("#caixa").animate({width: "500px", height: "500px"}, {duration: 3000})

});

$("#btn-down").click(function(){
    
    $("#caixa").animate({width: "200px"}).animate({height: "200px"})

});

//  A propriedade "complete" define uma função que é executada após o fim da animação
$("#btn-right").click(function(){
    
    $("#caixa").animate({left: "500px"}, {duration: 1000, complete: () => {
        alert('Movimentação finalizada')
    }})

});

$("#btn-left").click(function(){
    
    $("#caixa").animate({left: "0px"}, {duration: 1000})

});
