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
        console.log(e.target)
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

// tabsProducts(
//   // '.main-menu__dropdown',
//   // '.dropdown-catalog__item',
//   // '.submenu__list',
//   // 'dropdown-catalog__item--active'
// );

tabsProducts(
  '.productions__wrapper',
  '.productions__button',
  '.slider',
  'productions__button--active'
);

console.log(document.querySelector('.productions__button'))