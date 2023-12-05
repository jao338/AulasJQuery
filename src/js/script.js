//  Adiciona um evento de clique a todos os menus. O método "fadeToggle()" alterna a opacidade de elemento para 0 ou para 1
$("#menuJquery").click(function(){
    $("#submenuJquery").fadeToggle();
    $("#submenuJquery").css({"display" : "flex"});
});

$("#menuCanvas").click(function(){
    $("#submenuCanvas").fadeToggle();
    $("#submenuCanvas").css({"display" : "flex"});
});

$("#menuPython").click(function(){
    $("#submenuPython").fadeToggle();
    $("#submenuPython").css({"display" : "flex"});
});

$("#menuArduino").click(function(){
    $("#submenuArduino").fadeToggle();
    $("#submenuArduino").css({"display" : "flex"});
});