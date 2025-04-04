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

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".num");
    const speed = 200; // Velocidad de la animación (menor número = más rápido)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target"); // Obtiene el valor final
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20); // Controla la velocidad de incremento
            } else {
                counter.innerText = target; // Asegura que el número final se establezca correctamente
            }
        };

        updateCount();
    });
});
// Detectamos todos los elementos h4 dentro de .questions
const textElements = document.querySelectorAll('.questions h4');

// Función que verifica si el elemento está en la vista
function checkVisibility() {
    const windowHeight = window.innerHeight;

    textElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            // Si el elemento está cerca de la parte visible de la ventana, se agrega la clase 'visible'
            element.classList.add('visible');
        }
    });
}
