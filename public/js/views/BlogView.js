(function($) {
  
  App.BlogView = Backbone.View.extend({
    
    tagName: 'article',
    className: 'blog',
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    template: $('#template-blog').template(),
    
    render: function() {
      $(this.el).html($.tmpl(this.template, this.model.attributes));
      return this;
    },
    
    display: function() {
      App.views.app.replaceMainContent(this.render().el);
    }
    
  });
  
})(jQuery);