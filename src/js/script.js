//  Usa-se o "filter()" para selecionar todos os elementos "p" que possuem a classe "borda" e o "css()" para adicionar formatação
$("p").filter(".borda").css({"color" : "#f00"})

//  Usa-se o "not()" para selecionar todos os elementos "p" que não possuem a classe "borda" e o "css()" para adicionar formatação
$("p").not(".borda").css({"color" : "#00f"})
