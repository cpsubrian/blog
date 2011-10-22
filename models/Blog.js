/**
 * Blog model.
 */ 
module.exports = function(app) {
  var BlogSchema = new app.db.Schema({
    title: String,
    body: String,
    date: Date,
    tags: Array
  });
  
  return app.db.model('Blog', BlogSchema);
}