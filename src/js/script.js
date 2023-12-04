//  Adiciona uma borda ao(s) elemento(s) filho(s) direto(s)
$("div").children().css({"border" : "1px solid #f00"})

//  Adiciona uma borda ao(s) elemento(s) filho(s) especificados.
//  É possível selecionar o primeiro, o último e todos os elementos filhos do elemento selecionado usando "first", "last" ou "*"
$("div").find("ul:first").css({"border" : "1px solid #0f0"})

