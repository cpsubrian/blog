(function($) {
  
  App.AppView = Backbone.View.extend({
    
    el: 'body',
    
    events: {
      'click #create-blog': 'showCreateBlogForm'
    },
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    showCreateBlogForm: function() {
      var createBlogFormView = new App.CreateBlogFormView();
      createBlogFormView.render();
    }
    
  });
  
})(jQuery);