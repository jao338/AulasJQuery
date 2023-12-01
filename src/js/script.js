//  Neste caso a função "on()" permite adicionar mais de um evento a um elemento, mas neste caso todos os eventos irão rodar o mesmo script
$("#bloco").on("click dblclick", () => {
    $("#bloco-texto").text("Um evento de clique foi adicionado");    
});

$("#bloco").on({
    click: () => {$("#bloco-texto").text("Clicou")},
    mouseenter: () => {$("#bloco-texto").text("Entrou")},
    mouseleave: () => {$("#bloco-texto").text("Saiu")}
});
