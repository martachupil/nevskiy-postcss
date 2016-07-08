var postcss = require('postcss');

module.exports = postcss.plugin('nss', function (opts) {
    opts = opts || {};
    var gvalues = {
      'абсолютли':'absolute',
      'вотаквот': '!important'
    };

    // Work with options here

    return function (css, result) {
    css.walkDecls( function(decl) {

      // Search for available keyword
      var val = decl.value.toString();
      
      // Replace expressions
      for(var key in gvalues) {
        var reg = new RegExp(key);
        val = val.replace( reg, gvalues[key] );
      }

      decl.value = val.toString();
    });

    };
});
