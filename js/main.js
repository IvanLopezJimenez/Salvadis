$(document).ready(function () {
    // Carga con la animaciÃƒÂ³n solo abrir la pÃƒÂ¡gina
    $(".animOnDisplay").each(function () {
        $(this).addClass("slide");
    })
});

document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  } else {
    console.warn("No se encontrÃƒÂ³ el elemento #year en el DOM");
  }
});



document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".navbar-nav .dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");
        const menu = dropdown.querySelector(".dropdown-menu");

        toggle.addEventListener("click", function (e) {
            if (window.innerWidth < 992) {
                e.preventDefault(); // solo en mÃƒÂ³viles

                // Alternar clase para mostrar/ocultar el submenÃƒÂº
                dropdown.classList.toggle("show-submenu");
            }
        });
    });

    // Cerrar todos los submenÃƒÂºs al hacer clic fuera
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
    // SÃƒÂ³lo aparecerÃƒÂ¡ cuando se haga scroll y se vea en la pantalla.
    $(".slideanim").each(function () {
        var pos = $(this).offset().top;
        var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
            $(this).addClass("slide");
        }
    });
});

$(document).ready(function () {
    // Evita que el menÃƒÂº se cierre automÃƒÂ¡ticamente en desktop
    $('.navbar-nav .dropdown').hover(
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
        },
        function () {
            $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
        }
    );

    // Permite abrir el menÃƒÂº en clic en mÃƒÂ³viles
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
        if (!iframe) return; // Ã¢â€ Â evita error
        var src = iframe.src;
        iframe.src = src + "&autoplay=1";
    }, 1000);
};

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".num");
    if (!counters.length) return;

    const speed = 200;
    const statsSection = document.querySelector(".stats-section");
    let hasAnimated = false;

    const animateCounter = (counter) => {
        const target = Number(counter.getAttribute("data-target")) || 0;
        const step = Math.max(1, Math.ceil(target / speed));

        const updateCount = () => {
            const current = Number(counter.innerText) || 0;
            if (current < target) {
                counter.innerText = Math.min(target, current + step);
                window.setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const startCounters = () => {
        if (hasAnimated) return;
        hasAnimated = true;
        counters.forEach(animateCounter);
    };

    if (!statsSection || !("IntersectionObserver" in window)) {
        startCounters();
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(statsSection);
});

document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll("#myCarousel .carousel-slide");
    if (!slides.length) return;

    if (slides.length === 1) {
        slides[0].classList.add("active");
        return;
    }

    let current = 0;

    slides.forEach((slide, index) => {
        slide.classList.remove("active", "exit");
        if (index === 0) slide.classList.add("active");
    });

    function showNextSlide() {
        const currentSlide = slides[current];
        const next = (current + 1) % slides.length;
        const nextSlide = slides[next];

        currentSlide.classList.remove("active");
        currentSlide.classList.add("exit");

        nextSlide.classList.remove("exit");
        nextSlide.classList.add("active");

        window.setTimeout(() => {
            currentSlide.classList.remove("exit");
        }, 700);

        current = next;
    }

    setInterval(showNextSlide, 4000); // cambia cada 4 segundos
});
//src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js">
    //AOS.init();


document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slider = slides ? slides.closest(".slider") : null;
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  if (!slides || !slider || !prevBtn || !nextBtn) return;

  const originalSlides = Array.from(slides.querySelectorAll("img"));
  if (originalSlides.length < 2) return;

  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

  firstClone.setAttribute("aria-hidden", "true");
  lastClone.setAttribute("aria-hidden", "true");

  slides.appendChild(firstClone);
  slides.insertBefore(lastClone, originalSlides[0]);

  let allSlides = Array.from(slides.querySelectorAll("img"));
  let index = 1;
  let isTransitioning = false;
  const transitionTime = 800;
  const totalRealSlides = originalSlides.length;

  const dotsContainer = document.createElement("div");
  dotsContainer.className = "slider-dots";
  const dots = originalSlides.map((_, realIndex) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "slider-dot";
    dot.setAttribute("aria-label", `Ir a la imagen ${realIndex + 1}`);
    dot.addEventListener("click", () => moveTo(realIndex + 1));
    dotsContainer.appendChild(dot);
    return dot;
  });
  slider.appendChild(dotsContainer);

  const setTransition = (enabled) => {
    slides.style.transition = enabled ? `transform ${transitionTime}ms ease-in-out` : "none";
  };

  const applyPosition = () => {
    slides.style.transform = `translateX(-${index * 100}%)`;
  };

  const getRealIndex = () => {
    return (index - 1 + totalRealSlides) % totalRealSlides;
  };

  const updateDots = () => {
    const activeRealIndex = getRealIndex();
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeRealIndex);
    });
  };

  const moveTo = (newIndex) => {
    if (isTransitioning) return;
    isTransitioning = true;
    index = newIndex;
    setTransition(true);
    applyPosition();
    updateDots();
  };

  setTransition(false);
  applyPosition();
  updateDots();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => setTransition(true));
  });

  slides.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "transform") return;

    if (index === allSlides.length - 1) {
      setTransition(false);
      index = 1;
      applyPosition();
      void slides.offsetWidth;
      setTransition(true);
    } else if (index === 0) {
      setTransition(false);
      index = allSlides.length - 2;
      applyPosition();
      void slides.offsetWidth;
      setTransition(true);
    }

    updateDots();
    isTransitioning = false;
  });

  prevBtn.addEventListener("click", () => moveTo(index - 1));
  nextBtn.addEventListener("click", () => moveTo(index + 1));

  setInterval(() => moveTo(index + 1), 5000);
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

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".back-to-top")) return;

  const backToTopButton = document.createElement("button");
  backToTopButton.className = "back-to-top";
  backToTopButton.type = "button";
  backToTopButton.setAttribute("aria-label", "Volver arriba");
  backToTopButton.innerHTML = '<span aria-hidden="true">&uarr;</span>';
  document.body.appendChild(backToTopButton);

  function toggleBackToTop() {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("is-visible");
    } else {
      backToTopButton.classList.remove("is-visible");
    }
  }

  backToTopButton.addEventListener("click", function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });

  window.addEventListener("scroll", toggleBackToTop, { passive: true });
  toggleBackToTop();
});
