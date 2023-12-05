//  Adiciona um evento de clique a todos os elementos que possuem a classe "itemMenu". Adicionano, também, um evento que é acionado quando o mouse está sobre o elemento.
//  O método "fadeTo()" aplica uma animação de opacidade sobre o elemento. Recebendo dois argumentos, sendo o primeiro a duração(ms) e o segundo a opacidade(de 0.0 a 1.0)
$(".itemMenu").mouseover(function() {
    $(this).fadeTo(1000, 0.3)
})

$(".itemMenu").mouseleave(function() {
    $(this).fadeTo(1000, 1)
})