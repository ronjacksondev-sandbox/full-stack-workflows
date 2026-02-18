import { 
  InputPathToUrlTransformPlugin,
  EleventyHtmlBasePlugin,
 } from "@11ty/eleventy";
 import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';


export default function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
    baseHref: true ? "/full-stack-workflows/" : "/",
  });

  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    pathPrefix: "/full-stack-workflows/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
}