//  A função "detach()" remove um elemento e o armazena na memória
let itens = $(".item")

let i = 0

$("#btnMudar").click(() => {

    let item = $(itens[i]).detach();

    i++;

    $("#caixa2").append(item);
    
});

$("#btnReset").click(() => {
    
    for (let index = 0; index < itens.length; index++) {

        let item = $(itens[index]).detach();
        
        $("#caixa1").append(item);
    }
    
});