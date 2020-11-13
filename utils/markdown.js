const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttributes = require('markdown-it-attrs');
const markdownItBracketedSpans = require('markdown-it-bracketed-spans');

const mdOptions = {
  html: true,
  breaks: true,
  linkify: true,
  typographer: true
}
const mdAnchorOpts = {
  permalink: true,
  permalinkClass: 'anchor-link',
  permalinkSymbol: '#',
  // permalinkBefore: true,
  level: [1, 2, 3, 4]
}

const markdown = markdownIt(mdOptions)
  .use(markdownItBracketedSpans)
  .use(markdownItAttributes)
  .use(markdownItAnchor, mdAnchorOpts);

module.exports = markdown;
