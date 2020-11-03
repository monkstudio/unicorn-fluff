module.exports = (text, href, classes,target) => {

const primaryClass = classes ? 'primary' : '';
const linkTarget = target ? target : 'self';

var buttonMarkup;
if (href) {
buttonMarkup = `
<a class="btn ${ primaryClass }" href="${ href }" target="_${ linkTarget }">
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