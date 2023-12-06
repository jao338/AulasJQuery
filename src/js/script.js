//  A função "remove()" simplesmente apaga o elemento especificado, bem como todos os seus elementos filhos
//  A função "empty()" apaga todos os elementos filhos do elemento especificado

let r,g,b
let num = 0

$("#btnAdicionar").click(() => {


    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)

    num++

    $("#caixa").append("<div class='subcaixa' id='d"+num+"' style='background-color: rgb("+r+","+g+","+b+")'>"+num+"</div>")
    
    $("#msg").text(num)
});

$("#btnRemover").click(() => {

    $("#d" + num).remove();

    num--;
    
    $("#msg").text(num);
});

$("#btnRemoverConteudo").click(() => {

    $("#caixa").empty();

    num = 0;
    
    $("#msg").text(num);

    $("#caixa").append("<div class='subcaixa' id='d0' style='background-color: rgb(255,255,255)'>0</div>")
});