const yaml = require('js-yaml');
const htmlmin = require('html-minifier');
//plugins
const pluginRss = require("@11ty/eleventy-plugin-rss");
const Image = require("@11ty/eleventy-img");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')


//custom components
const componentsDir = `./src/_includes/components`;
const button = require(`${ componentsDir }/button.js`);
const modal = require(`${ componentsDir }/modal.js`);
const container = require(`${ componentsDir }/container.js`);
const column = require(`${ componentsDir }/column.js`);
const images = require(`${ componentsDir }/images.js`);

module.exports = (config) => {

  // Needed to prevent eleventy from ignoring changes to `webpack.njk`
  // since it is in our `.gitignore`
  config.setUseGitIgnore(false);

  // Allow eleventy to understand yaml files
  // mostly because we want comments support in data file.
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  // Pass-through files
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/assets/images');
  config.addPassthroughCopy('src/assets/scripts/vendor');
  config.addPassthroughCopy('src/assets/static');
  config.addPassthroughCopy('src/admin');

  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Custom Filters
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
  config.addFilter("dateDisplay", require("./src/filters/date.js"));

  config.addFilter("filterTags", tags => {
    tags = tags.filter(function (item) {
      switch (item) {
        // filter out any unwanted tags here
        case "all":
        case "nav":
        case "post":
        case "posts":
        case "page":
        case "pages":
          return false;
      }

      return true;
    });
    return tags;
  });


  // compress and combine js files
  config.addFilter("jsmin", function (code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });


  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Custom shortcodes
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
  config.addShortcode('button', button);
  config.addPairedShortcode('modal', modal);
  config.addPairedShortcode('container', container);
  config.addPairedShortcode('column', column);
  config.addNunjucksAsyncShortcode("image", images);

  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Plugins
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
  //add rss support
  config.addPlugin(pluginRss);

  //add syntax highlighting
  config.addPlugin(pluginSyntaxHighlight, {
    templateFormats: ["*"],
    // Added in 3.0, set to true to always wrap lines in `<span class="highlight-line">`
    // The default (false) only wraps when line numbers are passed in.
    alwaysWrapLineHighlights: true,

    // Added in 3.0.2, set to false to opt-out of pre-highlight removal of leading
    // and trailing whitespace
    trim: true,

    // Added in 3.0.4, change the separator between lines (you may want "\n")
    lineSeparator: "\n",
  });


  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Custom functionality, lists etc
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
  // Markdown
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
  config.setLibrary(
    'md',
    markdownIt(mdOptions)
      .use(markdownItAnchor, mdAnchorOpts)
  )
  config.addPlugin(pluginTOC, {
    tags: ['h1', 'h2', 'h3', 'h4'],
    wrapper: 'nav',           // element to put around the root `ol`/`ul`
    wrapperClass: 'toc',      // class for the element around the root `ol`/`ul`
    ul: false,                // if to use `ul` instead of `ol`
    flat: false,
  })

  //make tag list
  config.addCollection("tagList", function (collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function (item) {
      if ("tags" in item.data) {
        let tags = item.data.tags;

        tags = tags.filter(function (item) {
          switch (item) {
            // this list should match the `filter` list in tags.njk
            case "all":
            case "nav":
            case "post":
            case "posts":
            case "page":
            case "pages":
              return false;
          }

          return true;
        });

        for (const tag of tags) {
          tagSet.add(tag);
        }
      }
    });

    // returning an array in addCollection works in Eleventy 0.5.3
    return [...tagSet];
  });

  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Production stuff
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
  // Minify eleventy pages in production
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('html-min', (content, outputPath) =>
      outputPath.endsWith('.html') ?
      htmlmin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }) :
      content
    );
  }

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    htmlTemplateEngine: 'njk'
  };

};
