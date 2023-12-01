//  Adiciona um evento ao documento que monitora a posição em X e Y do mouse
$(document).mousemove( (event) => {

    $("#texto").text("Mouse X: " + event.pageX + ", Mouse Y: " + event.pageY)

});