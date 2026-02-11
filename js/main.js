$(document).ready(function () {
    // Carga con la animación solo abrir la página
    $(".animOnDisplay").each(function () {
        $(this).addClass("slide");
    })
});

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  } else {
    console.warn("No se encontró el elemento #year en el DOM");
  }
});



document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".navbar-nav .dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        toggle.addEventListener("click", function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault(); // solo en móviles

                // Alternar clase para mostrar/ocultar el submenú
                dropdown.classList.toggle("show-submenu");
            }
        });
    });

    // Cerrar todos los submenús al hacer clic fuera
    document.addEventListener("click", function (e) {
        if (window.innerWidth < 992) {
            const isClickInside = e.target.closest(".navbar-nav .dropdown");
            if (!isClickInside) {
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove("show-submenu");
                });
            }
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
    setTimeout(function() {
        var iframe = document.getElementById('hero-video');
        if (!iframe) return; // ← evita error
        var src = iframe.src;
        iframe.src = src + "&autoplay=1";
    }, 1000);
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
//src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js">
    //AOS.init();


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slides img");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  
  if (!slides || slideImages.length === 0) return;

  let index = 0;
  const totalSlides = slideImages.length;

  function showSlide(n) {
    index = (n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(index - 1));
  nextBtn.addEventListener("click", () => showSlide(index + 1));

  // Cambio automático cada 5 segundos
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    if (!question) return;

    question.addEventListener("click", () => {

      faqItems.forEach(el => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });
});

