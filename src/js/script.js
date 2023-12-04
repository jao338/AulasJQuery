//  "this" retorna o próprio elemento selecionado
//  O método "attr()" retorna o atributo especificado do elemento selecionado.
$("#caixa").click(function(){
    alert("Selecionando o id: " + $(this).attr('class'))
});

//   Ao passar mais um parâmetro para a função "attr()" alteramos o valor do atributo especificado
$("#btn-red").click(function(){
    $("#caixa").attr('class', 'vermelho')
});

$("#btn-blue").click(function(){
    $("#caixa").attr('class', 'azul')
});
