import { 
  InputPathToUrlTransformPlugin,
  EleventyHtmlBasePlugin,
 } from "@11ty/eleventy";
 import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';


// Dynamic setup and plugins
export default async function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({
    "node_modules/prismjs/prism.js": "js/prism.js",
    "node_modules/prismjs/plugins/toolbar/prism-toolbar.js": "js/prism-toolbar.js",
    "node_modules/prismjs/plugins/toolbar/prism-toolbar.css": "css/prism-toolbar.css",
    "node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js": "js/prism-copy-to-clipboard.js"
  });

  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
    baseHref: "/full-stack-workflows/"
  });

};

// Static settings
export const config = {
  setTemplateFormats: ["md", "html"],
  markdownTemplateEngine: false,
  htmlTemplateEngine: "liquid",
  pathPrefix: "/full-stack-workflows/",
  dir: {
    input: ".",
    output: "_site"
  }
};
