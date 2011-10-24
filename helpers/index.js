/**
 * Helper loading.
 */

var fs = require('fs');
var templates = false;

module.exports = function(app){
  
  // Static helpers.
  app.helpers({
    title: app.conf.title,
    templates: getTemplates()
  });
  
  // Dynamic helpers.
  app.dynamicHelpers({});
  
  // Load all helper sub-files.
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == "index.js") return;
    if (file.indexOf('.js') === false) return;
    var name = file.substr(0, file.indexOf('.'));
    
    // We only need to load the helpers once.
    require('./' + name)(app);
  });
  
}

/**
 * Get tempaltes
 */
function getTemplates() {
  if (!templates) {
    templates = {};
    var dir = __dirname + '/../views/templates';
    fs.readdirSync(dir).forEach(function(file) {
      var name = file.substr(0, file.indexOf('.'));
      var data = fs.readFileSync(dir + '/' + file, 'utf8');
      templates[name] = data;
    });
  }
  
  var templateHtml = '';
  for (var name in templates) {
    templateHtml += '<script type="text/template" id="template-' + name + '">' + "\n";
    templateHtml += templates[name] + "\n";
    templateHtml += '</script>' + "\n\n";
  }  
  return templateHtml;
}