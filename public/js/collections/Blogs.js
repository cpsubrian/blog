(function($) {
  
  App.Blogs = Backbone.Collection.extend({
    
    model: App.Blog,
    
    url: '/blogs',
    
    initialize: function() {
      _.bindAll(this); 
    },
    
  });
  
})(jQuery);