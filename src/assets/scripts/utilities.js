
/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Utilities
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/

// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
export function elementPartiallyInViewport(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  // Partially visible elements return true:
  isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

export function elementInViewport(el) {
  //special bonus for those using jQuery
  if (typeof jQuery !== 'undefined' && el instanceof jQuery) el = el[0];

  var rect = el.getBoundingClientRect();
  var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  var windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  return (
    (rect.left >= 0) &&
    (rect.top >= 0) &&
    ((rect.left + rect.width) <= windowWidth) &&
    ((rect.top + rect.height) <= windowHeight)
  );

}

export function getPreviousSibling(elem, selector) {
  // Get the next sibling element
  var sibling = elem.previousElementSibling;

  // If there's no selector, return the first sibling
  if (!selector) return sibling;

  // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop
  while (sibling) {
    if (sibling.matches(selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
};