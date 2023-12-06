//  Use a função "removeClass()" para remover uma ou várias classes
//  Use a função "addClass()" para adicionar uma ou várias classes
$("#btnVerde").click(() => {

    $("#caixa").removeClass("azul vermelho")
    $("#caixa").addClass("verde")

});

$("#btnVermelho").click(() => {

    $("#caixa").removeClass("verde azul")
    $("#caixa").addClass("vermelho")

});

$("#btnAzul").click(() => {

    $("#caixa").removeClass("verde vermelho")
    $("#caixa").addClass("azul")
    
});