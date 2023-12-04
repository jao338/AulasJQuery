//  Adiciona uma borda ao elemento pai do elemento "p", neste caso é o elemento "li"
$("p").parent().css({"border" : "1px solid #f00"})

//  Neste caso um borda é adicionada ao elemento "ul"
$("li").parent().css({"border" : "1px solid #00f"})

//  Neste é adicionado ao elemento "div"
$("ul").parent().css({"border" : "1px solid #0f0"})

//  Ao usar "parents()" todos os elementos pais são selecionados
$("p").parents().css({"border" : "1px solid #f00"})

//  Ao usar "parentsUntil()" são selecionados todos os elementos pais de um elemento até encontrar um determinado elemento
$("p").parentsUntil("div").css({"border" : "1px solid #00f"})

