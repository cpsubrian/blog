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
      App.views.app.replaceMainContent(this.el);
    },
    
    submit: function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      var blog = new App.Blog({
        title: $(this.el).find('input[name="title"]').val(),
        body: $(this.el).find('textarea[name="body"]').val()
      });
      blog.save();
      
      var blogView = new App.BlogView({model: blog});
      blogView.render();
    }
    
  });
  
})(jQuery);