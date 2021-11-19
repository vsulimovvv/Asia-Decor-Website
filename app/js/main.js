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


  // const menuSearchBox = document.querySelector('.menu-search');
  // const menuSearchToggle = document.querySelector('.header__search');

  // menuSearchToggle.addEventListener('click', e => {
  //   menuSearchBox.classList.add('active');
  // });

  const modals = () => {
    function bindModal(openBtn, modal, close) {
      const openBtnEl = document.querySelector(openBtn);
      const modalEl = document.querySelector(modal);
      const closeEl = document.querySelectorAll(close);
      const body = document.querySelector('body');

      if (modalEl) {
        openBtnEl.addEventListener('click', e => {
          if (e.target) {
            e.preventDefault()
          }

          modalEl.classList.add('active');
          // body.classList.add('no-scroll');
        });

        closeEl.forEach(el => {
          el.addEventListener('click', e => {
            modalEl.classList.remove('active');
            // body.classList.remove('no-scroll');
          })
        });

        modalEl.addEventListener('click', e => {
          console.log(e.target)
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            // body.classList.remove('no-scroll');
          }
        })
      };
    };

    bindModal('.header__search', '.menu-search', '.menu-search__close');
    // bindModal('.header__search', '.main-menu__link--services', '.menu-search__close');
    // bindModal('.contacts__title', '.popup--form', '.popup__close');
  };
  modals();

  function showDropdown(openBtn, modal) {
    const openBtnEl = document.querySelector(openBtn);
    const modalEl = document.querySelector(modal);
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('.header');
    const mainMenu = document.querySelector('.main-menu');

    if (modalEl) {
      openBtnEl.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault()
        }

        modalEl.classList.toggle('active');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', e => {
        overlay.classList.remove('active');
        modalEl.classList.remove('active');
      });
    };
  };

  showDropdown('.main-menu__link--services', '.dropdown-services');
  showDropdown('.main-menu__link--catalog', '.dropdown-catalog');

  // Tab
  function tabsProducts(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass
  ) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    if (content && header && tab) {

      hideTabContent();
      showTabContent();

      function hideTabContent() {
        content.forEach((item) => {
          item.classList.remove('active');
        });
        tab.forEach((item) => {
          item.classList.remove(activeClass);
        });
      }

      function showTabContent(i = 0) {
        content[i].classList.add('active');
        tab[i].classList.add(activeClass);
      }

      header.forEach((item) => {
        item.addEventListener('click', (e) => {
          const target = e.target;
          if (
            target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.classList.parentNode.contains(tabSelector.replace(/\./, ''))
          ) {
            tab.forEach((item, i) => {
              if (target == item || target.parentNode == item) {
                hideTabContent();
                showTabContent(i);
              }
            });
          }
        });
      });
    }
  };

  tabsProducts(
    '.main-menu__dropdown',
    '.dropdown-catalog__item',
    '.submenu__list',
    'dropdown-catalog__item--active'
  );
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