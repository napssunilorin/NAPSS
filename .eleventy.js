const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  // Pass through the images folder
  eleventyConfig.addPassthroughCopy("images");
  
  // Pass through the admin folder
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addFilter("markdown", function(value) {
    let markdown = markdownIt();
    return markdown.render(value);
});

  // Pass through other static files
  eleventyConfig.addPassthroughCopy("NAPSS logo.jpg");
  eleventyConfig.addPassthroughCopy("Departmental building.png");

  // A custom collection for your news articles
  eleventyConfig.addCollection("news", function(collection) {
    return collection.getFilteredByGlob("_posts/*.md");
  });

  return {
    dir: {
      // Set the input directory to the project root
      // This is where Eleventy will look for content and templates
      input: "./",
      
      // Set the output directory to `_site`
      // Netlify will serve the content from this folder
      output: "_site"
    }
  };
};