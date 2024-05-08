const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn,closeMenuBtn].forEach((btn)=>{
    btn.addEventListener("click",()=>{
        menu.classList.toggle("open");
        menu.style.transition="transform 0.5s ease";
    });
});
menu.addEventListener("transitionend",function(){
    this.removeAttribute("style");
})
menu.querySelectorAll(".dropdown > i").forEach((arrow)=>{
    arrow.addEventListener("click",function(){
        this.closest(".dropdown").classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function(){
    $('.carousel-control-next').on('click', function(){
        var cardWidth = $('.carousel-item').first().outerWidth(true);
        var carouselWidth = $('.carousel-inner').outerWidth();
        var scrollPosition = $('.carousel-inner').scrollLeft();
        var maxScroll = carouselWidth - $('.carousel-inner').width();
        if (scrollPosition < maxScroll) {
            $('.carousel-inner').animate({scrollLeft: '+=' + cardWidth * 4}, 600);
        }
    });

    $('.carousel-control-prev').on('click', function(){
        var cardWidth = $('.carousel-item').first().outerWidth(true);
        var scrollPosition = $('.carousel-inner').scrollLeft();
        if (scrollPosition > 0) {
            $('.carousel-inner').animate({scrollLeft: '-=' + cardWidth * 4}, 600);
        }
    });
});
var swiper = new Swiper(".slide-container", {
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
  });
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
    document.getElementById("requestServiceBtn").addEventListener("click", function() {
        // Redirect to new.html
        window.location.href = "request.html";
    });
