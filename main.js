//Slider

let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".best__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".best__prev",
      prevEl: ".best__next",
    },
  });

  let swiperIntro = new Swiper(".Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Burger-menu 

  document.getElementById("burger").addEventListener('click', function(){
    document.querySelector(".nav").classList.toggle("open")
  })