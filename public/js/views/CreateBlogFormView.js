(function($) {
  
  App.CreateBlogFormView = Backbone.View.extend({
    
    tagName: 'div',
    id: 'create-blog-form-wrapper',
    
    events: {
      'submit form': 'submit', 
    },
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    template: $('#template-create-blog-form').template(),
    
    render: function() {
      $(this.el).html($.tmpl(this.template, {}));
      return this;
    },
    
    display: function() {
      App.views.app.replaceMainContent(this.render().el);
    },
    
    submit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var blog = new App.Blog({
        title: $(this.el).find('input[name="title"]').val(),
        body: $(this.el).find('textarea[name="body"]').val()
      });
      blog.save(null, {
        success: function(blog, res) {
          App.collections.blogs.add(blog);
          App.routers.blog.navigate('blogs/' + blog.get('_id'), true); 
        },
        error: function(blog, res) {
          alert('Error saving blog.');
          console.log(blog);
          console.log(res);
        }
      });
      return false;
    }
    
  });
  
})(jQuery);