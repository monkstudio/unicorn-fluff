
module.exports = async (src, alt, classes) => {
  const Image = require("@11ty/eleventy-img");
  const site = require('../../_data/site.js');
  if (!alt) {
    // throw new Error(`Missing \`alt\` on myImage from: ${src}`);
    alt="";
  }
  const fullSrc = site.baseUrl + src;
  let stats = await Image(fullSrc, {
    widths: [320, 640, 960, 1200, 1800, 2400],
    formats: ["jpeg", "webp"],
    urlPath: "/assets/images/optimised",
    outputDir: "./dist/assets/images/optimised",
  });

  let lowestSrc = stats["jpeg"][0];

  const srcset = Object.keys(stats).reduce(
    (acc, format) => ({
      ...acc,
      [format]: stats[format].reduce(
        (_acc, curr) => `${_acc} ${curr.srcset},`,
        ""
      ),
    }),
    {}
  );

  const source = `<source type="image/webp" srcset="${srcset["webp"]}" >`;

  const img = `<img
    loading="lazy"
    class="${classes}"
    alt="${alt}"
    src="${lowestSrc.url}"
    sizes='(min-width: 1024px) 1024px, 100vw'
    srcset="${srcset["jpeg"]}"
    width="${lowestSrc.width}"
    height="${lowestSrc.height}">`;

  const markup = `<div class="image-wrapper animate"><picture> ${source} ${img} </picture></div>`;

  return markup;
}