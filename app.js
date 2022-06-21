document.addEventListener("DOMContentLoaded", () => {
  const mobileButton = document.querySelector(".mobile-button");

  const mobileContainer = document.querySelector(".mobile-container");

  mobileButton.addEventListener("click", () => {
    mobileContainer.classList.toggle("invisible");
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,

    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
