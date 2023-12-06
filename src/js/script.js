//  Com a função "css()" podemos recuperar ou alterar propriedades dos elementos
//  Ao alterar uma(s) propriedade(S), usa-se uma chave. O primeiro valor é a propriedade que será alterada e o segundo valor é o valor que será atribuido a propriedade
//  Utilize como parametro da função "css('propriedade')" o valor que deseja recuperar
$("#btnVerde").click(() => {

    $("#caixa").css({"background-color":"#0f0", "color":"#f0f"})

    alert($("#caixa").css("background-color"))
});

$("#btnVermelho").click(() => {

    $("#caixa").css({"background-color":"#f00", "color":"#0ff"})

});

$("#btnAzul").click(() => {

    $("#caixa").css({"background-color":"#00f", "color":"#ff0"})
    
});