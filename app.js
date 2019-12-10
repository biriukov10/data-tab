'use strict';

let d = document;

function setTabElem() {
  let liElem = d.createElement('li'),
    count = d.querySelectorAll('.tabs a').length,
    linkElem = d.createElement('a'),
    ulList = d.querySelector('.tabs');
  liElem.setAttribute('data-tab', '3');
  liElem.appendChild(linkElem);
  linkElem.setAttribute('href', '#');
  count++;
  linkElem.textContent = 'Part ' + count;
  ulList.appendChild(liElem);
}
setTabElem();


function setPanelText() {
  let divElem = d.createElement('div'),
    tabsContent = d.querySelector('.tabs-content'),
    parElem = d.createElement('p');

  divElem.classList.add('tabs-panel');
  divElem.setAttribute('data-tab-index', '3');
  parElem.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra erat at dui dictum, ac semper ante blandit. Suspendisse eleifend felis augue, et egestas odio tempor sed. Quisque sed justo eget arcu viverra sodales. Suspendisse a venenatis augue, imperdiet elementum lorem. Donec neque dui, fringilla vitae ultricies vel, scelerisque non ante. Aliquam erat volutpat. Donec erat velit, finibus at lobortis nec, venenatis ac ipsum. Proin blandit urna turpis, quis euismod dui elementum quis. Vestibulum hendrerit eget est ornare sollicitudin.';
  divElem.appendChild(parElem);
  tabsContent.appendChild(divElem);
}
setPanelText();
let tabLinks = d.querySelector('.tabs'), // Обьявля список ul
  tabPanels = d.querySelectorAll('.tabs-panel'); // Обьявляем все блоки с содержимым 

tabLinks.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.closest('ul')) {
    // dataTab - Номер вкладки которую нужно отобразить
    let dataTab = e.target.closest('li').getAttribute('data-tab');
    let tabLi = d.querySelectorAll('li');
    for (let i = 0; i < tabLi.length; i++) {
      if (tabLi[i].classList.toggle('active')) {
        tabLi[i].classList.remove('active');
      }
    }
    e.target.closest('li').classList.add('active');
    for (let i = 0; i < tabPanels.length; i++) {
      if (dataTab == i) {
        tabPanels[i].classList.add('active');
      } else {
        tabPanels[i].classList.remove('active');
      }
    }
  }
});

// for (let i = 0; i < tabLinks.length; i++) {

//   let el = tabLinks[i];
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     // if (e.target.nodeName == 'data-tab') {
//     d.querySelector('.tabs .active').classList.remove('active');
//     d.querySelector('.tabs-panel.active').classList.remove('active');

//     let parentLi = el.parentElement,
//       parentListItemIndex = parentLi.getAttribute('data-tab'),
//       panelContentSelector = '[data-tab-index="' + parentListItemIndex + '"]';

//     d.querySelector(panelContentSelector).classList.add('active');
//     parentLi.classList.add('active');
//     // }

//   });
// }