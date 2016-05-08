// Load `*.js` under current directory as properties
// i.e., `stringFormat.js` will become `exports['stringFormat']`
// or `exports.stringFormat`
const fs = require('fs');

fs.readdirSync(__dirname + '/').forEach(function(file) {
  if (file.match(/\.js(on)?$/) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    exports[name] = require('./' + file);
  }
});
