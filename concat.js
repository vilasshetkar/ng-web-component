var concat = require('concat-files');
concat([
    './dist/aon-product/runtime.js',
    './dist/aon-product/polyfills.js',
    './dist/aon-product/main.js',
], './dist/aon-product/bundle.js', function(err) {
    if (err) throw err
    console.log('done');
});