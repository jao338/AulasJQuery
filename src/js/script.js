//  A função "position()" possui dois atributos que recuperam a posição do elemento
//  A função "change()" aciona uma ação quando o valor do elemento é alterado
$("#btnPosicao").click(() => {

    let t = $("#caixa").position().top
    let l = $("#caixa").position().left

    alert("Top: " + t + " | Left: " + l)
});

$("#top").change((event) => {

    let valor = document.getElementById(event.target.id).value

    $("#caixa").css({"top":valor+"px"})

});

$("#left").change((event) => {

    let valor = document.getElementById(event.target.id).value

    $("#caixa").css({"left":valor+"px"})

});