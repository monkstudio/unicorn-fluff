module.exports = (text, href, classes,target) => {

  const primaryClass = classes ? 'primary' : '';
  var buttonMarkup;
  if (href) {
    buttonMarkup = `
<a class="btn ${ primaryClass }" href="${ href }" target="${ target }">
${ text }
</a>
    `;
  } else {
    buttonMarkup = `
<button class="btn ${ primaryClass }">
${ text }
</button>
  `;
  }
  return buttonMarkup;
};