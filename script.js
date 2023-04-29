let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let logo = document.querySelector('.header .logo');

menuBtn.onclick = () => {
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   header.classList.toggle('header-bg');
   logo.classList.toggle('logo-color');
};



let searchbtn = document.querySelector('.searchbtn');
let closebtn = document.querySelector('.closebtn');
let searchbox = document.querySelector('.searchbox');

searchbtn.onclick = () => {
   searchbox.classList.add('active');
   closebtn.classList.add('active');
   searchbtn.classList.add('active');
}

closebtn.onclick = () => {
   searchbox.classList.remove('active');
   closebtn.classList.remove('active');
   searchbtn.classList.remove('active');
}



var swiper = new Swiper(".home-slider", {
   grabCursor: true,
   loop: true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});



var swiper = new Swiper(".food-slider", {
   loop: true,
   centeredSlides: true,
   spaceBetween: 20,
   autoplay: {
      delay: 3500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});



let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
   food.onclick = () => {
      previewContainer.style.display = 'flex';
      let name = food.getAttribute('data-name');
      previewBox.forEach(preveiw => {
         let target = preveiw.getAttribute('data-target');
         if (name == target) {
            preveiw.classList.add('active');
         }
      });
   };
});

previewContainer.querySelector('#close-preview').onclick = () => {
   previewContainer.style.display = 'none';
   previewBox.forEach(close => {
      close.classList.remove('active');
   });
};



lightGallery(document.querySelector('.gallery .gallery-container'));



var swiper = new Swiper(".menu-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});



var swiper = new Swiper(".blogs-slider", {
   grabCursor: true,
   loop: true,
   autoHeight: true,
   spaceBetween: 20,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      700: {
         slidesPerView: 2,
      },
      1000: {
         slidesPerView: 3,
      },
   },
});



document.addEventListener('scroll', () => {
   const header = document.querySelector('.header');
   if (window.scrollY >= 50) {
      header.classList.add('scrolled');
   } else {
      header.classList.remove('scrolled');
   }
});