//  "this" retorna o alvo do evento
//  O método "text()" retorna o texto do elemento
$("h2").last().click(function(){
    alert('Valor obtido usando "text()": ' + $(this).text())
})

//  O método "val()" retorna o valor interno de um elemento. Geralmente usado para recuperar dados de um input
$("#nome").click(function(){
    alert('Valor obtido usando "val()": ' + $(this).val())
})

//  O método "html()" retorna todo o conteúdo interno do elemento, inclusive as tags HTML.
$("#caixa").click(function(){
    alert('Valor obtido usando "html()": ' + $(this).html())
})