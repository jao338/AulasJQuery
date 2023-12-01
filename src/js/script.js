//  Adiciona um evento de click ao elemento de "#texto1" que altera o texto do parágrafo "#resultado" com qual o nome do elemento de id "#texto1"
$("#texto1").click( (event) => {

    $("#resultado").text("O objeto que foi clicado foi: " + event.target.nodeName);

});

//  Adiciona um evento de click que altera o texto do parágrafo "#resultado" com qual elemento HTML foi clicado
$(document).click( (event) => {

    $("#resultado").text("O objeto que foi clicado foi: " + event.target.nodeName);

});