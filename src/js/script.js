//  O método text() equivale ao innerHTML do JS puro
$("#bloco").click( () => {
    $("#bloco-texto").text("Clicou");    
});

$("#bloco").mouseenter( () => {
    $("#bloco-texto").text("Entrou");    
});

$("#bloco").mouseleave( () => {
    $("#bloco-texto").text("Saiu");    
});

//  Seleciona o elemento de input e adiciona o evento de "keyup", sendo que toda vez que o evento é disparado, o valor do elemento de "#input-texto" é alterado pelo de valor de "#nome"
$("#nome").keyup( () => {
    $("#input-texto").text($("#nome").val())
})



