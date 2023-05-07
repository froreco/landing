module.exports = function (eleventyConfig) {
    let copyOptions = {
        expand: true, // expand symbolic links
    };
    // Copy static assets over to _site directory.
    eleventyConfig.addPassthroughCopy("demos");
    eleventyConfig.addPassthroughCopy({"dist/css": "css"});
    eleventyConfig.addPassthroughCopy({"dist/images": "images"}, copyOptions);
    // eleventyConfig.addPassthroughCopy({"dist/images/blog": "images/blog"});
    eleventyConfig.addPassthroughCopy({"dist/js": "js"});
    eleventyConfig.addPassthroughCopy("*.css");
    // Return configuration object.
    return {};
};