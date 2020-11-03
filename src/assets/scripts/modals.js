

/*
-ˋˏ *.·:·.⟐.·:·.* ˎˊ-
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
Modals
━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
 -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
*/
var focusableElems = document.querySelectorAll('#page a[href]:not([disabled]),#page button:not([disabled]),#page textarea:not([disabled]),#page input[type="text"]:not([disabled]),#page input[type="radio"]:not([disabled]),#page input[type="checkbox"]:not([disabled]),#page select:not([disabled])');

export function closeModal() {
  document.getElementsByTagName('html')[0].classList.remove('modal-open');
  let modals = document.querySelectorAll('.modal.active');
  for (var i = 0; i < modals.length; i++) {
    modals[i].classList.remove('active');
  }
  for (var i = 0; i < focusableElems.length; i++) {
    focusableElems[i].setAttribute('tabindex', '')
  }
}

export function openModal(hash) {
  // e.preventDefault();
  let target = '#' + hash.substr(1);
  let modalfocusableElems = document.querySelector(target).querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
  let closeBtn = document.querySelector(target).querySelector('.close');
  document.querySelector(target).classList.add('active');
  document.getElementsByTagName('html')[0].classList.add('modal-open')

  if (focusableElems) {
    for (var i = 0; i < focusableElems.length; i++) {
      focusableElems[i].setAttribute('tabindex', -1)
    }
  }

  if (modalfocusableElems) {
    for (var i = 0; i < modalfocusableElems.length; i++) {
      modalfocusableElems[i].setAttribute('tabindex', '');
    }
  }


  var button = document.createElement("button");
  button.classList.add('close');
  button.innerHTML = '<div class="cross"></div>';
  document.querySelector(target).appendChild(button);
  button.addEventListener('click', e => {
    closeModal();
  });
}
