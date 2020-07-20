module.exports = (content) => {

  var markup = `
  <div class="container">
  <div class="row">
  ${ content }
  </div>
  </div>
  `;

  return markup;
};