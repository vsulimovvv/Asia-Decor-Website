window.addEventListener('DOMContentLoaded', () => {

  // ! Slider Production
  const sliderGroup = () => {
    const x = document.getElementsByClassName('slider');
    for (let i = 0; i < x.length; i++) {
      const el = x[i];

      const sliderDef = el.getElementsByClassName('productions__slider')[0];
      const nextBtn = el.getElementsByClassName('arrow-next')[0];
      const prevBtn = el.getElementsByClassName('arrow-prev')[0];

      const swiper = new Swiper(sliderDef, {
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

  // ! Stock Slider
  (function sliderStock(parent) {
    const parentEl = document.querySelector(parent);
    if (parentEl) {
      const slider = parentEl.querySelector('.slider-arrow-top__slider');
      const swiper = new Swiper(slider, {
        spaceBetween: 29,
        navigation: {
          nextEl: parentEl.querySelector(".swiper-button-next"),
          prevEl: parentEl.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: parentEl.querySelector(".swiper-pagination"),
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
  })('.stock-slider');

  // ! Recommendations
  (function sliderRecommendations() {
    const parentEl = document.querySelector('.reccomentations');
    if (parentEl) {
      const slider = parentEl.querySelector('.slider-arrow-top__slider');
      let swiper = new Swiper(slider, {
        spaceBetween: 29,
        navigation: {
          nextEl: parentEl.querySelector(".swiper-button-next"),
          prevEl: parentEl.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: parentEl.querySelector(".swiper-pagination"),
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
  })();

  // ! Best Offers Arrow Top
  (function sliderRecommendations(parent) {
    const parentEl = document.querySelector(parent);
    if (parentEl) {
      const slider = parentEl.querySelector('.slider-arrow-top__slider');
      let swiper = new Swiper(slider, {
        spaceBetween: 29,
        pagination: {
          el: parentEl.querySelector(".swiper-pagination"),
        },
        navigation: {
          nextEl: parentEl.querySelector(".swiper-button-next"),
          prevEl: parentEl.querySelector(".swiper-button-prev"),
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
  })('.best-offers');

  // ! Partners 
  (function sliderPartners() {
    const parentEl = document.querySelector('.partners');
    if (parentEl) {
      const slider = parentEl.querySelector('.slider-arrow-top__slider');
      const swiper = new Swiper(slider, {
        spaceBetween: 29,
        navigation: {
          nextEl: parentEl.querySelector(".swiper-button-next"),
          prevEl: parentEl.querySelector(".swiper-button-prev"),
        },
        pagination: {
          el: parentEl.querySelector(".swiper-pagination"),
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
  })();

  // !
  (function verticalSlider2() {
    let mySwiperNav = new Swiper('#product-nav', {
      slidesPerView: 3.2,
      spaceBetween: 12,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loopedSlides: 3,
    });

    let mySwiper = new Swiper('#product-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav
      }
    });
  }());

  // const menuSearchBox = document.querySelector('.menu-search');
  // const menuSearchToggle = document.querySelector('.header__search');

  // menuSearchToggle.addEventListener('click', e => {
  //   menuSearchBox.classList.add('active');
  // });

  // const modals = () => {
  //   function bindModal(openBtn, modal, close) {
  //     const openBtnEl = document.querySelector(openBtn);
  //     const modalEl = document.querySelector(modal);
  //     const closeEl = document.querySelectorAll(close);
  //     const body = document.querySelector('body');

  //     if (modalEl) {
  //       openBtnEl.addEventListener('click', e => {
  //         if (e.target) {
  //           e.preventDefault()
  //         }

  //         modalEl.classList.add('active');
  //         // body.classList.add('no-scroll');
  //       });

  //       closeEl.forEach(el => {
  //         el.addEventListener('click', e => {
  //           modalEl.classList.remove('active');
  //           // body.classList.remove('no-scroll');
  //         })
  //       });

  //       modalEl.addEventListener('click', e => {
  //         console.log(e.target)
  //         if (e.target === modalEl) {
  //           modalEl.classList.remove('active');
  //           // body.classList.remove('no-scroll');
  //         }
  //       })
  //     };
  //   };

  //   bindModal('.header__search', '.menu-search', '.menu-search__close');
  //   // bindModal('.header__search', '.main-menu__link--services', '.menu-search__close');
  //   // bindModal('.contacts__title', '.popup--form', '.popup__close');
  // };
  // modals();

  // function showDropdown(openBtn, modal) {
  //   const openBtnEl = document.querySelector(openBtn);
  //   const modalEl = document.querySelector(modal);
  //   const body = document.querySelector('body');
  //   const overlay = document.querySelector('.overlay');
  //   const header = document.querySelector('.header');
  //   const mainMenu = document.querySelector('.main-menu');

  //   if (modalEl) {
  //     openBtnEl.addEventListener('click', e => {
  //       if (e.target) {
  //         e.preventDefault()
  //       }

  //       modalEl.classList.toggle('active');
  //       overlay.classList.toggle('active');
  //     });

  //     overlay.addEventListener('click', e => {
  //       overlay.classList.remove('active');
  //       modalEl.classList.remove('active');
  //     });
  //   };
  // };

  // showDropdown('.main-menu__link--services', '.dropdown-services');
  // showDropdown('.main-menu__link--catalog', '.dropdown-catalog');

  // Tab
  // function tabsProducts(
  //   headerSelector,
  //   tabSelector,
  //   contentSelector,
  //   activeClass
  // ) {
  //   const header = document.querySelectorAll(headerSelector);
  //   const tab = document.querySelectorAll(tabSelector);
  //   const content = document.querySelectorAll(contentSelector);

  //   if (content && header && tab) {

  //     hideTabContent();
  //     showTabContent();

  //     function hideTabContent() {
  //       content.forEach((item) => {
  //         item.classList.remove('active');
  //       });
  //       tab.forEach((item) => {
  //         item.classList.remove(activeClass);
  //       });
  //     }

  //     function showTabContent(i = 0) {
  //       content[i].classList.add('active');
  //       tab[i].classList.add(activeClass);
  //     }

  //     header.forEach((item) => {
  //       item.addEventListener('click', (e) => {
  //         const target = e.target;
  //         if (
  //           target.classList.contains(tabSelector.replace(/\./, '')) ||
  //           target.classList.parentNode.contains(tabSelector.replace(/\./, ''))
  //         ) {
  //           tab.forEach((item, i) => {
  //             if (target == item || target.parentNode == item) {
  //               hideTabContent();
  //               showTabContent(i);
  //             }
  //           });
  //         }
  //       });
  //     });
  //   }
  // };

  // tabsProducts(
  //   '.main-menu__dropdown',
  //   '.dropdown-catalog__item',
  //   '.submenu__list',
  //   'dropdown-catalog__item--active'
  // );


  const toggleAccordion = (accordion, accordionContent) => {
    const filters = document.querySelectorAll(accordion);

    filters.forEach(el => {
      el.addEventListener('click', e => {
        const target = e.currentTarget.parentNode;
        const content = target.querySelector(accordionContent);
        console.log(target)
        target.classList.toggle('active');

        if (target.classList.contains('active')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      });
    });
  };
  // ! This needs Change
  // toggleFullSidebox('.main-menu__item', '.filter-box__drop');
  toggleAccordion('.accordion__control', '.accordion__content');
  toggleAccordion('.review__top', '.review__content');

  // !
  (function tabsSlider(
    headerSelector,
    tabSelector,
    contentSelector,
    activeClass
  ) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    header.forEach(el => {
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
        if (item) {
          item.addEventListener('click', (e) => {
            const target = e.target;

            if (
              target.classList.contains(tabSelector.replace(/\./, ''))
            ) {
              tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                  hideTabContent();
                  showTabContent(i);
                }
              });
            }
          });
        }
      });
      // }
    })
  }(
    '.productions__wrapper',
    '.productions__button',
    '.slider',
    'productions__button--active'
  ));
});

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

// console.log(document.querySelectorAll('.slider-arrow-top__slider'))