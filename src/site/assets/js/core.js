console.log('🥑 %cMade by Monk', 'background: #616a2e; color: #f4e9e2; padding: 5px 17px; border-radius: 3px;');
console.log(' %chttp://monk.com.au ', 'padding: 5px 13px;');

//js detect
(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);


// simple button click event handler
function btnHandler(selector, callback) {
  var btn = document.querySelector(selector);
  if(!btn) { return; }
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    callback();
  }, false);
}


//nav
(function(document, window, undefined) {

  'use strict';

  // Vars
  var header = document.querySelector('.site-header'),
    menu = document.querySelector('.site-menu'),
    menuButton = document.createElement('a');

  // Button properties
  menuButton.classList.add('menu-button');
  menuButton.setAttribute('href', '#menu');
  menuButton.setAttribute('id', 'menu-button');
  menuButton.setAttribute('aria-label', 'Menu');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-controls', 'menu');
  menuButton.innerHTML = '<span aria-hidden="true">&#x2261;</span>';

  // Menu properties
  menu.setAttribute('aria-hidden', 'true');
  menu.setAttribute('aria-labelledby', 'menu-button');

  // Add button to page
  header.insertBefore(menuButton, menu);

  // Handle button click event
  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    // If active...
    if (menu.classList.contains('active')) {
      // Hide
      menu.classList.remove('active');
      menu.setAttribute('aria-hidden', 'true');
      menuButton.setAttribute('aria-expanded', 'false');
    } else {
      // Show
      menu.classList.add('active');
      menu.setAttribute('aria-hidden', 'false');
      menuButton.setAttribute('aria-expanded', 'true');

      // Set focus on first link
      // menu.children[0].children[0].children[0].focus();
    }
  }, false);

})(document, window);