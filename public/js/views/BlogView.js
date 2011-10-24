(function($) {
  
  App.BlogView = Backbone.View.extend({
    
    tagName: 'article',
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    template: $('#template-blog').template(),
    
    render: function() {
      $(this.el).html($.tmpl(this.template, this.model.attributes));
      App.views.app.replaceMainContent(this.el);
    }
    
  });
  
})(jQuery);