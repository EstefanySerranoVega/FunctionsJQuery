$(function() {

    $('.btn-attr').click(function() {
        alert('La imagen se encuentra en la Ruta: ' + $(".img-attr").attr("src"));
        //alert('el color del width es: ' + r);
    });

    $('.btn-before').click(function() {
        $('.img-attr').before('<img src="img/before.jpg" alt="" class ="img-before">');
    });

    $('.btn-prepend').click(function() {
        $('.img-one').prepend('<h2> Contenedor de Imagenes</h2>');
    });

    $('.btn-after').click(function() {
        var txt1 = "<b>I </b>"; // Create element with HTML
        var txt2 = $("<i></i>").text("love "); // Create with jQuery
        var txt3 = document.createElement("b"); // Create with DOM
        txt3.innerHTML = "jQuery!";
        $('.img-attr').after(txt1, txt2, txt3);
    });

    $('.btn-append').click(function() {
        $('.img-two').append('<h2>Inserción de imagen con append</h2><img src="img/append.jpg" alt="" >');
    });

    $('.btn-remove').click(function() {
        $('.img-two').remove();

    });
    $('.btn-hide').click(function() {
        $('.img-two').hide(1000, function() {
            alert("Hide() ha sido ejecutado exitosamente!");
        });

    });

    $('.btn-show').click(function() {
        $('.img-two').show(1000, function() {
            alert("show() ha sido ejecutado exitosamente!");
        });
    });
});