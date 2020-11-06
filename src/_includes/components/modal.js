module.exports = (content,modalName, buttonText) => {

var markup = `
<div id="modal-${ modalName }" class="modal">
${ content }
</div>

<a href="#modal-${ modalName }" class="btn modal-trigger">${ buttonText }</a>
`;
return markup;
};