$(document).ready(function () {
    // Carga con la animación solo abrir la página
    $(".animOnDisplay").each(function () {
        $(this).addClass("slide");
    })
});

$(window).scroll(function () {
    // Sólo aparecerá cuando se haga scroll y se vea en la pantalla.
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

$(document).ready(function () {
    // Evita que el menú se cierre automáticamente en desktop
    $('.navbar-nav .dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
        }
    );

    // Permite abrir el menú en clic en móviles
    $('.dropdown-toggle').click(function (e) {
        if ($(window).width() < 992) {
            e.preventDefault();
            $(this).next('.dropdown-menu').slideToggle();
        }
    });
});

window.onload = function() {
    // Retraso para esperar que cargue la página y permitir autoplay
    setTimeout(function() {
        var iframe = document.getElementById('hero-video');
        var src = iframe.src;
        iframe.src = src + "&autoplay=1";  // Añadir autoplay después de un retraso
    }, 1000);  // 1 segundo de retraso
};