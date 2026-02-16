import { InputPathToUrlTransformPlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
}