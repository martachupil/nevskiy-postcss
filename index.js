var postcss = require('postcss');

module.exports = postcss.plugin('nss', function (opts) {
    opts = opts || {};
    var gvalues = {
      'абсолютли':'absolute',
      'вотаквот': 'inherit'
    };

    // Work with options here

    return function (css, result) {
    css.walkDecls( function(decl) {

      // Detect keyword
      var keyword = gvalues[decl.value];

      // Search for available keyword
      if( typeof keyword !== 'undefined' ) {
        decl.value = keyword;
      }
    });

    };
});
