const util = require('util');
const { format } = require('date-fns');
const UglifyJS = require("uglify-js");
module.exports = {
  log: (data) => console.log(`\n${util.inspect(data)}\n`),
  formatDate: (dateObj, dateFormat) => format(dateObj, dateFormat),
  filterTags:(tags) => {
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
  },
  jsmin: (code) => {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  }
};
