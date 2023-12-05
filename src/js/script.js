//  A função "slideUp()" oculta um ou vários elementos, deslizando para cima. Já a função "slideDown()" exibe um ou vários elementos, deslizando para baixo
$("#btnCima").click(function () {

    $("#menus").slideUp(1000, () => {
        $("#msg").text('Menu oculto')
    });

});

$("#btnBaixo").click(function () {
    
    $("#menus").slideDown(1000, () => {
        $("#msg").text('Menu exibido')
    });

});