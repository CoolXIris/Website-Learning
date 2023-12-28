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
    updateArrowVisibility();
    showHideVideo();
  };

  const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
    updateArrowVisibility();
    showHideVideo();
  };

  // ... (Bagian skrip JavaScript lainnya)

  // Menambahkan fungsi untuk menampilkan/menyembunyikan video di Slide 6
  const showHideVideo = () => {
    const videoContainer = document.getElementById("video-container");
    if (currentSlide === 5) {
      // 5 adalah indeks Slide 6
      // Menyisipkan video
      videoContainer.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/kagoEGKHZvU?si=RLS5sgLRkg7XRDBO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
    } else {
      // Menyembunyikan video jika bukan di Slide 6
      videoContainer.innerHTML = "";
    }
  };

  // ... (Bagian skrip JavaScript lainnya)

  // Memanggil fungsi showHideVideo saat halaman dimuat dan saat mengganti slide
  document.addEventListener("DOMContentLoaded", showHideVideo);
});
