/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Inline JS
//note using ES6 may throw some errors
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
console.log('🥑 %cMade by Monk', 'background: #616a2e; color: #f4e9e2; padding: 5px 17px; border-radius: 3px;');
console.log(' %chttp://monk.com.au ', 'padding: 5px 13px;');

//replace no-js class with js
(function (H) {
  H.className = H.className.replace(/\bno-js\b/, 'js');
})(document.documentElement)



//store viewport/header heights
var currentWidth = window.innerWidth;

function cssProperties() {
 var vh = window.innerHeight;
 var header = document.querySelector('.site-header');
 var headerHeight = header.clientHeight;

  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', vh + 'px' );
  document.documentElement.style.setProperty('--headerHeight', headerHeight + 'px');
}
cssProperties();
// We listen to the resize event
window.addEventListener('resize', function() {
  if (window.innerWidth !== currentWidth) {
    cssProperties();
  }
});
