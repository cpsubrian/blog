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
        if (!blog) return next(new Error('failed to find blog'));
        req.blog = blog;
        next();
      });
    });
    
    // Routes.
    app.get('/blogs', this.list);
    app.get('/blogs/:blogId', this.read);
    app.post('/blogs', this.create);
    app.put('/blogs/:blogId', this.update);
    app.del('/blogs/:blogId', this.remove);
  }
  
  /**
   * List blog posts. get('/blog')
   */
  BlogController.prototype.list = function(req, res) {
    app.models.Blog.find().sort('$natural', -1).exec(function(err, blogs) {
      if (err) throw err;
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
    var blog = new app.models.Blog(req.body);
    blog.save(function(err) {
      if (err) throw err;
      res.send(blog);
    });
  }
  
  /**
   * Update a blog post. put('/blog/:blogId')
   */
  BlogController.prototype.update = function(req, res) {
    for (var prop in req.body) {
      req.blog[prop] = req.body[prop];
    }
    req.blog.save(function(err) {
      if (err) throw err;
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
