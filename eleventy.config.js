import { 
  InputPathToUrlTransformPlugin,
  EleventyHtmlBasePlugin,
 } from "@11ty/eleventy";
 import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';


export default async function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
    baseHref: "/full-stack-workflows/"
  });

  return {
    pathPrefix: "/full-stack-workflows/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
}
