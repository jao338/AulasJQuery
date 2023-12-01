//  "event.type" retorna o tipo de evento e "event.which" retorna quem disparou o evento
$(document).on({
    click: (event) => {$("#resultado").text("Tipo de evento: " + event.type + "- Quem disparou o evento: " + event.which)},
    keydown: (event) => {$("#resultado").text("Tipo de evento: " + event.type + "- Quem disparou o evento: " + event.which)}
});