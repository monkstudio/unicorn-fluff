
/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Parallax
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
export var winScrollTop = 0;

export function parallax() {
  let elems = document.querySelectorAll('.parallax');
  for (var i = 0; i < elems.length; i++) {
    if (elementPartiallyInViewport(elems[i])) {
      var firstTop = elems[i].getBoundingClientRect().top + window.pageYOffset;
      var moveTop = (firstTop - winScrollTop) * elems[i].dataset.speed;
      // if (moveTop > 0) {
      //   elems[i].style.transform = "translateY(" + -Math.max(0, moveTop) + "px)";
      // } else {
      //   elems[i].style.transform = "translateY(" + Math.min(0, moveTop) + "px)";
      // }
      elems[i].style.transform = "translateY(" + -Math.max(0, moveTop) + "px)";

    }
  }
}
