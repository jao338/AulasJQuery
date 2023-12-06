$("#btnReplace1").click((event) => {

    $("<p>Esse texto foi adicionado com replaceAll()</p>").replaceAll(".cor")

});

$("#btnReplace2").click((event) => {

    $("<div>"+$(event.currentTarget).text()+"</div>").replaceAll(event.currentTarget)

});

$("#btnReplace3").click((event) => {

    
    $(".cor").replaceWith("<p>Texto trocado</p>")

});

$("#btnReplace3").click((event) => {

    
    $(event.currentTarget).replaceWith("<div>"+$(event.currentTarget).text()+"</div>")

});