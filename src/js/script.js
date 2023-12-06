//  A função "hasClass()" retorna true se o elemento selecionado posssui a classe especificada ou retorna false, caso o elemento não possua a classe.
$(".btnFechar").click((event) => {
    
    //  "event.targer.id" retorna o id do elemento que foi clicado. Usa-se o parente para selecionar o seu elemento pai 
    $("#" + event.target.id).parent().addClass("ocultar")

});

$("#btnReset").click(() => {
    
    let itens = $(".caixa")

    for (let index = 0; index < itens.length; index++) {
        
        if ($(itens[index]).hasClass("ocultar")) {
            $(itens[index]).removeClass("ocultar")
        }
    }

});