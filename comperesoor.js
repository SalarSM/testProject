var compressor = require('node-minify');


compressor.minify({
    compressor: 'uglifyjs',
    input: 'js/main.js',
    output: 'bar.js',
    callback: function (err, min) { }
});