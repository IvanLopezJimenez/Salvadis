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
// window.addEventListener('scroll', checkVisibility);
// window.addEventListener('load', checkVisibility);

// document.addEventListener('DOMContentLoaded', function () {
//     const slides = document.querySelectorAll('.questions-slide');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target); // Deja de observar una vez que se ha hecho visible
//             }
//         });
//     }, {
//         threshold: 0.1 // Ajusta este valor según sea necesario
//     });

//     slides.forEach(slide => {
//         observer.observe(slide);
//     });
// });
// document.addEventListener('DOMContentLoaded', () => {
//     const items = document.querySelectorAll('.m-item');
//     let current = 0;
//     const observerOptions = {
//     root: null,
//     threshold: 0.5,
//     };
  
//     function showNext() {
//     if (current < items.length) {
//         items[current].classList.add('visible');
//         current++;
//         }
//     }
  
//     function onScroll() {
//         const scrollY = window.scrollY;
//         const step = window.innerHeight;
  
//         let index = Math.floor(scrollY / step);
//         if (index !== current && index < items.length) {
//         showNext();
//         }
//     }
  
//     window.addEventListener('scroll', onScroll);
  
//     showNext(); // Mostrar el primero al cargar
// });
  

  
  
  
  
  


