//  JavaScript puro

let btnJS = document.querySelector('#btn_somarjs').addEventListener('click', () => {

    let v1 = document.querySelector('#v1').value;
    let v2 = document.querySelector('#v2').value;

    document.querySelector('#res').value = (parseInt(v1) + parseInt(v2))

});


//  jQuery

//  Seleciona usando a sintaxe $()
//  .val() retorna o valor do elemento selecionado
//  parseInt() converte o valor do elemento selecionado em um inteiro

$("#btn_somarjq").click(() => {

    let v1 = $("#v1").val();
    let v2 = $("#v2").val();

    $("#res").val(parseInt(v1) + parseInt(v2));
})