const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    // Pass through the images folder. This copies the entire folder to _site.
    eleventyConfig.addPassthroughCopy("images");
    
    // Pass through the admin folder.
    eleventyConfig.addPassthroughCopy("admin");

    // Pass through individual image files from the root.
    eleventyConfig.addPassthroughCopy("NAPSS logo.jpg");
    eleventyConfig.addPassthroughCopy("Departmental building.png");

    // Custom markdown filter to process markdown content in Liquid files.
    eleventyConfig.addFilter("markdown", function(value) {
        let markdown = new markdownIt();
        return markdown.render(value);
    });

    // A custom collection for your news articles.
    eleventyConfig.addCollection("news", function(collection) {
        return collection.getFilteredByGlob("_posts/*.md");
    });

    return {
        // Set the input directory to the project root.
        input: "./",
        // Set the output directory to _site, where Netlify will serve the content.
        output: "_site"
    };
};