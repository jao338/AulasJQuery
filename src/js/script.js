//   O método "show()" exibe o elemento selecionado
$("#btn-toggle").click(function(){
    $("#caixa").toggle()

    //  Se o elemento "#caixa" tiver a propriedade "visible"
    if($("#caixa").is(':visible')){
        $("#btn-toggle").text('Ocultar')
    }else{
        $("#btn-toggle").text('Mostrar')
    }
});

