//  A função "slideToggle()" exibe deslizando caso o(s) elemento(s) esteja(m) oculto(s) ou oculta o(s) elemento(s) caso esteja(m) visível(eis)
$("#btnMenu").click(function () {

    $("#menus").slideToggle(1000, () => {
        
        if($("#menus").is(":visible")){

            $("#msg").text('Menu Exibido')
            $("#controle").css({backgroundColor: "#f00"})
        }else{
            $("#msg").text('Menu Oculto')
            $("#controle").css({backgroundColor: "#888"})
        }

    });

});
