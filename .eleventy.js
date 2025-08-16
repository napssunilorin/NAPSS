module.exports = function(eleventyConfig) {
  // Pass through the images folder
  eleventyConfig.addPassthroughCopy("images");
  
  // Pass through the admin folder
  eleventyConfig.addPassthroughCopy("admin");

  // Pass through other static files
  eleventyConfig.addPassthroughCopy("NAPSS logo.jpg");
  eleventyConfig.addPassthroughCopy("homepage.html");
  eleventyConfig.addPassthroughCopy("news_fullbody.html");
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