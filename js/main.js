$(document).ready(function () {
    // Carga con la animación solo abrir la página
    $(".animOnDisplay").each(function () {
        $(this).addClass("slide");
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".navbar-nav .dropdown");
  
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");
    
        toggle.addEventListener("click", function (e) {
            if (window.innerWidth < 992) {
            e.preventDefault(); // solo en móviles
    
            // Alternar visibilidad del submenú
            const isVisible = menu.style.display === "block";
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
            if (!isVisible) menu.style.display = "block";
            }
        });
    });
  
    // Cerrar todos los menús al hacer clic fuera
    document.addEventListener("click", function (e) {
        const isClickInside = e.target.closest(".navbar-nav .dropdown");
        if (!isClickInside) {
            document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
        }
    });
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

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-slide");
    let current = 0;
    function showNextSlide() {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }
    setInterval(showNextSlide, 4000); // cambia cada 4 segundos
});
src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js">
    AOS.init();



