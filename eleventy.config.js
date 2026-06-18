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

  eleventyConfig.addPassthroughCopy("public");

  eleventyConfig.addPassthroughCopy({
    "node_modules/prismjs/prism.js": "public/js/prism.js",
    "node_modules/prismjs/themes/prism-tomorrow.css": "public/css/prism-tomorrow.css",
    "node_modules/prismjs/plugins/autoloader/prism-autoloader.min.js": "public/js/prism-autoloader.min.js",
    "node_modules/prismjs/components/prism-bash.min.js": "public/js/components/prism-bash.min.js",

    "node_modules/prismjs/plugins/toolbar/prism-toolbar.js": "public/js/prism-toolbar.js",
    "node_modules/prismjs/plugins/toolbar/prism-toolbar.css": "public/css/prism-toolbar.css",
    "node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js": "public/js/prism-copy-to-clipboard.js",

    "node_modules/prismjs/components/prism-diff.js": "public/js/prism-diff.js",
    "node_modules/prismjs/plugins/diff-highlight/prism-diff-highlight.css": "public/css/prism-diff-highlight.css",
    "node_modules/prismjs/plugins/diff-highlight/prism-diff-highlight.js": "public/js/prism-diff-highlight.js"
  });

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
