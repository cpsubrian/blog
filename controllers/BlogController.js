/**
 * Blog Controller.
 */
module.exports = function(app) {
  
  /**
   * Controller Constructor.
   */
  var BlogController = function() {
    app.util.bindAll(this);
    
    // Params.
    app.param('blogId', function(req, res, next, blogId) {
      app.models.Blog.findById(blogId, function(err, blog) {
        if (err) return next(err);
        if (!user) return next(new Error('failed to find blog'));
        req.blog = blog;
        next();
      });
    });
    
    // Routes.
    app.get('/blog', this.list);
    app.get('/blog/:blogId', this.read);
    app.post('/blog', this.create);
    app.put('/blog/:blogId', this.update);
    app.del('/blog/:blogId', this.remove);
  }
  
  /**
   * List blog posts. get('/blog')
   */
  BlogController.prototype.list = function(req, res) {
    app.models.Blog.find({}, function(err, blogs) {
      if (err) throw new Error(err);
      if (!blogs) throw new Error('failed to find any blogs');
      res.send(blogs);
    })
  }
  
  /**
   * Read a blog post. get('/blog/:blogId')
   */
  BlogController.prototype.read = function(req, res) {
    res.send(req.blog);
  }
  
  /**
   * Create a blog post. post('/blog')
   */
  BlogController.prototype.create = function(req, res) {
    // @todo Validate body.
    var blog = new app.models.Blog(req.body.blog);
    blog.save(function(err) {
      if (err) throw new Error(err);
      res.send(blog);
    });
  }
  
  /**
   * Update a blog post. put('/blog/:blogId')
   */
  BlogController.prototype.update = function(req, res) {
    for (var prop in req.body.blog) {
      req.blog[prop] = req.body.blog[prop];
    }
    req.blog.save(function(err) {
      if (err) throw new Error(err);
      res.send(req.blog);
    });
  }
  
  /**
   * Delete a blog post. del('/blog/:blogId')
   */
  BlogController.prototype.remove = function(req, res) {
    req.blog.remove(function(err) {
      res.send({msg: 'removed blog'});
    });
  }
  
  return BlogController;
}
