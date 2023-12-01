//  Evita que o(s) evento(s) se propagem. A propagação acontece quando um evento de um elemento filho é acionado pelo elemeno pai
$("div").click( (event) => {
    event.stopPropagation();
    alert('Evento disparado na DIV')
});

$("p").click( (event) => {
    event.stopPropagation();
    alert('Evento disparado no P')
});

$("span").click( (event) => {
    event.stopPropagation();
    alert('Evento disparado no SPAN')
});
