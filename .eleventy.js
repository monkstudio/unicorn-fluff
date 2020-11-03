const yaml = require('js-yaml');
const htmlmin = require('html-minifier');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

const componentsDir = `./src/_includes/components`;
const button = require(`${ componentsDir }/button.js`);
const container = require(`${ componentsDir }/container.js`);
const column = require(`${ componentsDir }/column.js`);

module.exports = (config) => {

  // components
  config.addShortcode('button', button);
  config.addPairedShortcode('container', container);
  config.addPairedShortcode('column', column);

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

  config.addFilter("dateDisplay", require("./src/filters/date.js") );
  // Date formatting (human readable)
  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });
  config.addFilter("readableDateYear", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy");
  });

  // Date formatting (machine readable)
  config.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });

  config.addFilter("filterTags", tags => {
    tags = tags.filter(function(item) {
      switch(item) {
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

  // add support for rss
  config.addPlugin(pluginRss);

  // compress and combine js files
  config.addFilter("jsmin", function(code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
      if( minified.error ) {
          console.log("UglifyJS error: ", minified.error);
          return code;
      }
      return minified.code;
  });

  //make tag list
  config.addCollection("tagList", function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(function(item) {
      if( "tags" in item.data ) {
        let tags = item.data.tags;

        tags = tags.filter(function(item) {
          switch(item) {
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


  // Minify eleventy pages in production
  if (process.env.NODE_ENV === 'production') {
    config.addTransform('html-min', (content, outputPath) =>
      outputPath.endsWith('.html')
        ? htmlmin.minify(content, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          })
        : content
    );
  }

  return {
    dir: { input: 'src', output: 'dist' },
    htmlTemplateEngine: 'njk'
  };

};
