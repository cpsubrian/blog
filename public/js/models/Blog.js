(function($) {
  
  App.Blog = Backbone.Model.extend({
    urlRoot: '/blogs',
    
    defaults: {
      'title': 'New Blog Post',
      'body': '[body of the post]',
    },
    
    initialize: function() {
      _.bindAll(this); 
    }
    
  });
  
})(jQuery);