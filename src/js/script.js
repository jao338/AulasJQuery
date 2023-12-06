//  Use a função "setInterval()" para definir uma funçaõ que será executada a cada intervalo de tempo especificado
//  A função "toggleClass()" adiciona a classe especificada caso o elemento não possua a classa ou a remove caso já a possua
let alert = setInterval(() => {
    $("#caixa").toggleClass("alerta")
}, 1000)

