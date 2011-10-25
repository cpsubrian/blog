(function($) {
  
  App.BlogRouter = Backbone.Router.extend({
    
    routes: {
      '': 'home',
      
      'blogs/create': 'createBlog',
      'blogs/:blogId': 'viewBlog'
    },
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    home: function() {
      App.collections.blogs.fetch({
        success: function(blogs, res) {
          var $list = $('<ul class="blogs"></ul>');
          blogs.forEach(function(blog, i) {
            // @todo Replace with a proper blogs list view.
            var blogView = new App.BlogView({model: blog});
            $(blogView.render().el).wrap('<li></li>').parent().appendTo($list);
          });
          App.views.app.replaceMainContent($list);
        },
        error: function(blogs, res) {
          alert('Error fetching blogs.'); 
        }
      });
    },
    
    createBlog: function() {
      if (!App.views.createBlogForm) {
        App.views.createBlogForm = new App.CreateBlogFormView();
      }
      App.views.createBlogForm.display();
    },
    
    viewBlog: function(blogId) {
      var blog = App.collections.blogs.get(blogId),
          blogView = null;
          
      if (!blog) {
        blog = new App.Blog({_id: blogId});
        blog.fetch({
          success: function(blog, res) {
            App.collections.blogs.add(blog);
            blogView = new App.BlogView({model: blog});
            blogView.display();
          },
          error: function(blog, res) {
            alert('Could not fetch blog.'); 
          }          
        });
      }
      else {
        blogView = new App.BlogView({model: blog});
        blogView.display();
      }
    }
    
  });
  
})(jQuery);