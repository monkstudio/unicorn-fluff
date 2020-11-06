'use strict';
import  {openModal,closeModal} from "./modals";
import inView from '../../../node_modules/in-view';
// import  {parallax} from "./parallax";
// import  {elementPartiallyInViewport, elementInViewport, getPreviousSibling} from "./utilities";
// parallax();
// window.scrollTo(window.scrollX, window.scrollY - 1);

var root;
root = document.getElementsByTagName('html')[0];


/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Inview
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
inView('.animate')
    .on('enter',  el => {
      setTimeout(function(){       
        el.classList.add('fadein')
    }, 500);

    })
    .on('exit', el => {
        // el.style.opacity = 0.5;
    });

/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Modals
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
var modalTriggers = document.querySelectorAll('.modal-trigger');

for (var i = 0; i < modalTriggers.length; i++) {
  let btn = modalTriggers[i];
  btn.addEventListener('click', e => {
    openModal(btn.hash)
  });

  // var offset = $(window).scrollTop();  //your current y position on the page
  // $(window).scrollTop(y-150);
}

var hash = window.location.hash;
if (hash.includes('modal')) {
  openModal(hash)
}

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    closeModal();
  }
};

/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Menu
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/


var navWrapper = document.querySelector('.main-navigation'),
  menu = document.querySelector('.menu-wrapper'),
  menuButton = document.createElement('button'),
  screenOverlay = document.querySelector('#screen-overlay');

// Button properties
menuButton.classList.add('menu-button');
menuButton.setAttribute('href', '#menu');
menuButton.setAttribute('id', 'menu-button');
menuButton.setAttribute('aria-label', 'Menu');
menuButton.setAttribute('aria-expanded', 'false');
menuButton.setAttribute('aria-controls', 'menu');
menuButton.innerHTML = '<span aria-hidden="true">Menu</span>';

// Menu properties
menu.setAttribute('aria-hidden', 'true');
menu.setAttribute('aria-labelledby', 'menu-button');

// Add button to page
navWrapper.insertBefore(menuButton, menu);

// Handle button click event
menuButton.addEventListener('click', function (e) {
  e.preventDefault();
  // If active...
  if (navWrapper.classList.contains('active')) {
    // Hide
    menuButton.innerHTML = '<span aria-hidden="true">Menu</span>';
    navWrapper.classList.remove('active');
    menu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-expanded', 'false');
    root.classList.remove('menu-open');
  } else {
    // Show
    menuButton.innerHTML = '<span aria-hidden="true">Close</span>';
    navWrapper.classList.add('active');
    menu.setAttribute('aria-hidden', 'false');
    menuButton.setAttribute('aria-expanded', 'true');
    root.classList.add('menu-open');

    // Set focus on first link
    // menu.children[0].children[0].children[0].focus();
  }
}, false);

//close menu with an outside click (basically anywhere on .site-content)
function closeMenu() {
  root.classList.remove('menu-open');
  navWrapper.classList.remove("active");
}

screenOverlay.addEventListener('click', function() {
  closeMenu();
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    closeMenu();
  }
});
