document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  };

  // Navigasi dengan id slide
  const navigateToSlide = (slideId) => {
    const index = Array.from(slides).findIndex((slide) => slide.id === slideId);
    if (index !== -1) {
      showSlide(index);
      currentSlide = index;
    }
  };

  const backIcon = document.querySelector(".back-icon");
  const moreIcon = document.querySelector(".more-icon");

  backIcon.addEventListener("click", () => {
    // Kembali ke "dictionary.html"
    window.location.href = "dictionary.html";
  });

  moreIcon.addEventListener("click", toggleMenu);

  function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show-menu");
  }

  // Tombol Panah di setiap slide
  document.querySelectorAll(".arrow-left").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      prevSlide();
      updateArrowVisibility();
    });
  });

  document.querySelectorAll(".arrow-right").forEach((arrow) => {
    arrow.addEventListener("click", () => {
      nextSlide();
      updateArrowVisibility();
    });
  });

  // Menu dropdown untuk slide
  document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSlideId = event.target.getAttribute("href").substring(1);
      navigateToSlide(targetSlideId);
      toggleMenu();
      updateArrowVisibility();
    });
  });

  // Inisialisasi visibilitas panah saat memuat halaman
  updateArrowVisibility();

  // Tambahan untuk menutup menu saat klik di luar menu
  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".menu");
    if (!menu.contains(event.target) && !moreIcon.contains(event.target)) {
      menu.classList.remove("show-menu");
    }
  });
});
