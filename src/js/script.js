//  Adiciona uma borda a todos os elementos "irmãos"(que estão no mesmo nível que ele) do elemento selecionado
$("h3").siblings().css({"border" : "1px solid #f00"})

//  É possível especificar quais elementos "irmãos" que devem ser selecionados
$("h3").siblings("p").css({"border" : "1px solid #0f0"})

//  Adiciona uma borda ao próximo elemento "irmão" do elemento selecionado. 
//  É possível utilizar o método "prev()" para selecionar o elemento irmão anterior do elemento especificado

$("h3").next().css({"border" : "1px solid #00f"})

//  Adiciona uma borda a todos os elementos irmãos do elemento selecionado
//  É possível utilizar o método "prevAll()" para selecionar todos os elementos irmãos anteriores
$("h3").nextAll().css({"border" : "1px solid #f0f"})

//  Adiciona uma borda a todos os elementos irmãos do elemento especificado até encontrar um certo elemento
$("h3").nextUntil("h2").css({"border" : "1px solid #f00"})


