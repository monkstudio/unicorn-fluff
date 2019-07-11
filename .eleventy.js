
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

module.exports = function(config) {

  // A useful way to reference the context we are runing eleventy in
  let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias('default', 'layouts/base.njk');

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js") );
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js") );
  //to use to dump collection data eg. {{ collections.post | serializePosts}}
  config.addFilter('serializePosts', require("./src/utils/filters/serializeposts.js"));
  // Date formatting (human readable)
  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  // Date formatting (machine readable)
  config.addFilter("machineDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("yyyy-MM-dd");
  });
  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);
  // add support for rss
  config.addPlugin(pluginRss);

  //custom sort nav by menu order
  config.addCollection("myCustomSort", function(collection) {
    return collection.getFilteredByTag("nav").sort(function(a, b) {
      return a.data.menuorder - b.data.menuorder;
    });
  });
  // minify the html output
  config.addTransform("htmlmin", require("./src/utils/minify-html.js"));

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


  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");
  config.addPassthroughCopy("./src/site/admin");
  config.addPassthroughCopy("./src/site/css");

  // make the seed target act like prod
  env = (env=="seed") ? "prod" : env;
  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: `_data/${env}`
    },
    templateFormats : ["njk", "md", "11ty.js"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
    passthroughFileCopy: true
  };
};
