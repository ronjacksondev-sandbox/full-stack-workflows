import { 
  InputPathToUrlTransformPlugin,
  EleventyHtmlBasePlugin,
 } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "base.html");

  eleventyConfig.addPlugin (EleventyHtmlBasePlugin, {
    baseHref: true ? "/full-stack-workflows/" : "/",
  });

  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {
    pathPrefix: "/full-stack-workflows/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
}