window.addEventListener('DOMContentLoaded', () => {
  // var swiper = new Swiper(".productions__slider", {
  //   slidesPerView: 4,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     type: "progressbar",
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });


  // const mixer = mixitup('.productions__wrapper');

  const sliderGroup = () => {
    const sliderRec = document.querySelector('.productions__slider');
    const nextBtn = document.querySelector('.arrow-next');
    const prevBtn = document.querySelector('.arrow-prev');

    if (sliderRec) {
      const swiper = new Swiper(sliderRec, {
        spaceBetween: 29,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 2.1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 29,
          },
        },
      });
    }
  };
  sliderGroup();

  const sliderGroup2 = () => {
    const sliderRec = document.querySelector('.swiper2');
    const nextBtn = document.querySelector('.arrow-next');
    const prevBtn = document.querySelector('.arrow-prev');

    if (sliderRec) {
      const swiper = new Swiper(sliderRec, {
        spaceBetween: 29,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 2.1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 29,
          },
        },
      });
    }
  };
  sliderGroup2();

  const sliderGroup3 = () => {
    const sliderRec = document.querySelector('.partners__slider');
    const nextBtn = document.querySelector('.arrow .arrow-next');
    const prevBtn = document.querySelector('.arrow .arrow-prev');

    if (sliderRec) {
      const swiper = new Swiper(sliderRec, {
        spaceBetween: 29,
        loop: true,
        freeMode: true,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 2.1,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 29,
          },
        },
      });
    }
  };
  sliderGroup3();

});

// 
// (function toggleSelect() {
//   $('#select').wSelect();
// })()


// const showMenu = () => {
//   const menuBtn = document.querySelector('.toggle-menu');
//   const menu = document.querySelector('.header__bottom');
//   const body = document.querySelector('body');
//   // const overlay = document.querySelector('.overlay');
//   const closeBtn = document.querySelector('.header__bottom-close');

//   menuBtn.addEventListener('click', e => {
//     menu.classList.toggle('active');
//     // menuBtn.classList.toggle('active');
//     // overlay.classList.toggle('active');
//     body.classList.toggle('no-scroll');
//   });

//   // overlay.addEventListener('click', e => {
//   // menu.classList.remove('active');
//   // menuBtn.classList.remove('active');
//   // overlay.classList.remove('active');
//   // body.classList.remove('no-scroll');
//   // });
//   closeBtn.addEventListener('click', e => {
//     menu.classList.remove('active');
//     menuBtn.classList.remove('active');
//     // overlay.classList.remove('active');
//     body.classList.remove('no-scroll');
//   });
// };
// showMenu();