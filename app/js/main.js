window.addEventListener('DOMContentLoaded', () => {
  // * ==== Slider Production
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

  // * ==== Stock Slider
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

  // * ==== Recommendations
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

  // * ==== Best Offers Arrow Top
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

  // * ==== Partners 
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

  // * ==== Single Product
  (function verticalSlider1() {
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

  // * ==== Single Showroom
  (function verticalSlider2() {
    const arrowNext = document.querySelector('.arrow-next');
    const arrowPrev = document.querySelector('.arrow-prev');

    let mySwiperNav = new Swiper('#product-nav', {
      slidesPerView: 3.2,
      spaceBetween: 12,
      direction: 'horizontal',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      loopedSlides: 3,
    });

    let mySwiper = new Swiper('#product-main', {
      navigation: {
        nextEl: arrowNext,
        prevEl: arrowPrev,
      },
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav
      }
    });
  }());

  // * ==== Show menu
  (function showMenu() {
    if (window.innerWidth < 991) {
      const menuBtn = document.querySelector('.header__toggle');
      const menu = document.querySelector('.header__menu');
      const body = document.querySelector('body');

      menuBtn.addEventListener('click', e => {
        menu.classList.toggle('active');
        body.classList.toggle('no-scroll');
      });
    }
  }());

  // * ==== Modal With Button Close
  (function modalsWithBtnClose() {
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
          body.classList.add('no-scroll');
        });

        closeEl.forEach(el => {
          el.addEventListener('click', e => {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          });
        });

        modalEl.addEventListener('click', e => {
          console.log(e.target)
          if (e.target === modalEl) {
            modalEl.classList.remove('active');
            body.classList.remove('no-scroll');
          }
        });
      };
    };

    bindModal('.header__search', '.menu-search', '.menu-search__close');
  }());


  // * ==== Modal Without Button Close
  function showDropdown(openBtn, modal) {
    const openBtnEl = document.querySelector(openBtn);
    const modalEl = document.querySelector(modal);
    const overlayEl = document.querySelector('.overlay');
    const bodyEl = document.querySelector('body');
    const mainMenuLink = document.querySelectorAll('.main-menu__link');

    if (modalEl) {
      openBtnEl.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault()
        }
        modalEl.classList.add('active');
        overlayEl.classList.add('active');
        bodyEl.classList.add('no-scroll');
      });

      // mainMenuLink.forEach(el => {
      //   el.addEventListener('click', e => {
      //     modalEl.classList.remove('active');
      //     overlayEl.classList.remove('active');
      //     bodyEl.classList.remove('no-scroll');
      //   });
      // });

      overlayEl.addEventListener('click', e => {
        overlayEl.classList.remove('active');
        modalEl.classList.remove('active');
        bodyEl.classList.remove('no-scroll');
      });
    };
  };
  showDropdown('.main-menu__link--services', '.dropdown-services');
  showDropdown('.main-menu__link--catalog', '.dropdown-catalog');

  // * ==== Accordion
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
  toggleAccordion('.accordion__control', '.accordion__content');
  toggleAccordion('.review__top', '.review__content');
  toggleAccordion('.main-menu__link--services', '.dropdown-services');
  toggleAccordion('.main-menu__link--catalog', '.dropdown-catalog');

  // * ==== Toggle Tabs
  function tabsSlider(
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
    })
  };
  tabsSlider(
    '.productions__wrapper',
    '.productions__button',
    '.slider',
    'productions__button--active'
  );
  tabsSlider(
    '.dropdown-catalog__container',
    '.dropdown-catalog__item',
    '.submenu__list ',
    'dropdown-catalog__item--active'
  );
});