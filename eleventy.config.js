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
