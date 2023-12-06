//  A função "position()" possui dois atributos que recuperam a posição do elemento
//  A função "change()" aciona uma ação quando o valor do elemento é alterado
//  A função "offset()" possui dois atributos que recuperam a posição do elemento. Com essa função também é possível alterar os valores das propriedades "top" e "left", diferentemente da função "position()"
//  A função "removeAttr()" remove o atributo especificado
//  A função "removeClass()" remove um ou mais classe(s) de um elemento
$("#btnPosicao").click(() => {

    let pt = $("#caixa").position().top
    let pl = $("#caixa").position().left
    let ot = $("#caixa").offset().top
    let ol = $("#caixa").offset().left

    alert("Position Top: " + pt + " | Position Left: " + pl)
    alert("Offeset Top: " + ot + " | Offeset Left: " + ol)
});

$("#top").change((event) => {

    let valor = document.getElementById(event.target.id).value

    $("#caixa").offset({"top":valor})

});

$("#left").change((event) => {

    let valor = document.getElementById(event.target.id).value

    $("#caixa").offset({"left":valor})

});

$("#btnRemoverAtributo").click(() => {

    $("#caixa").removeAttr("style")

});

$("#btnRemoverClasse").click(() => {

    $("#caixa").removeClass("borda")

});