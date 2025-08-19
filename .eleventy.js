const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    // This line copies the entire 'img' folder and all its contents to '_site/img'.
    eleventyConfig.addPassthroughCopy("img");

    // This is the new line to copy the 'images' folder.
    eleventyConfig.addPassthroughCopy("images");

    // Pass through the admin folder.
    eleventyConfig.addPassthroughCopy("admin");

    // A custom markdown filter to process markdown content in Liquid files.
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