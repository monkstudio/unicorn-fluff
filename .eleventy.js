const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

//plugins
const ErrorOverlayPlugin = require('eleventy-plugin-error-overlay');
const TOCPlugin = require('eleventy-plugin-toc')
const SyntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");

const filters = require('./utils/filters');
const markdown = require('./utils/markdown');
const shortcodes = require('./utils/shortcodes');
const transforms = require('./utils/transforms');

module.exports = (config) => {
  const manifestPath = path.resolve(__dirname, '_site/assets/manifest.json');
  // Allow for customizing the built in markdown parser.
  config.setLibrary('md', markdown);

  // Allow eleventy to understand yaml files
  config.addDataExtension('yml', (contents) => yaml.safeLoad(contents));

  // Plugins
  // Shows error name, message, and fancy stacktrace
  config.addPlugin(ErrorOverlayPlugin);
  config.addPlugin(TOCPlugin, {
    tags: ['h1', 'h2', 'h3', 'h4'],
    wrapper: 'nav',           // element to put around the root `ol`/`ul`
    wrapperClass: 'toc',      // class for the element around the root `ol`/`ul`
    ul: false,                // if to use `ul` instead of `ol`
    flat: false,
  });
  config.addPlugin(SyntaxHighlightPlugin, {
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

  // Filters
  config.addFilter('log', filters.log);
  config.addFilter('formatDate', filters.formatDate);
  config.addFilter("filterTags",filters.filterTags);
  config.addFilter("jsmin",filters.jsmin);

  // Shortcodes
  config.addShortcode('icon', shortcodes.icon);
  config.addPairedShortcode('markdown', shortcodes.markdown);
  config.addNunjucksAsyncShortcode('image', shortcodes.image);
  config.addNunjucksAsyncShortcode('webpack', shortcodes.webpack);
  config.addShortcode('button', shortcodes.button);
  config.addPairedShortcode('modal', shortcodes.modal);
  config.addPairedShortcode('container', shortcodes.container);
  config.addPairedShortcode('column', shortcodes.column);

  // Transforms
  config.addTransform('html-min', transforms.htmlmin);

  // Pass-through files
  config.addPassthroughCopy('src/_headers');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/assets/static');
  config.addPassthroughCopy('src/admin');


  // Make eleventy aware of the manifest file
  config.addWatchTarget(manifestPath);

  /*
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  Custom functionality, lists etc
  ━━━ ⋅𖥔⋅ ━━✶━━ ⋅𖥔⋅ ━━━
  -ˋˏ *.·:·.⟐.·:·.* ˎˊ-
  */
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

  // BrowserSync Overrides
  config.setBrowserSyncConfig({
    ...config.browserSyncConfig,
    // Show 404 page on invalid urls
    callbacks: {
      ready: (err, browserSync) => {
        browserSync.addMiddleware('*', (req, res) => {
          const fourOFour = fs.readFileSync('_site/404.html');
          res.write(fourOFour);
          res.end();
        });
      }
    },
    // Speed/clean up build time
    ui: false,
    ghostMode: false
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
    config.addTransform('html-min', transforms.htmlmin);
  }
  return {
    dir: { input: 'src', output: '_site', includes: 'includes', data: 'data' },
    // Allow nunjucks, markdown and 11ty files to be processed
    templateFormats: ['njk', 'md', '11ty.js'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};
