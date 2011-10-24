(function($) {
  
  App.AppView = Backbone.View.extend({
    
    el: 'body',
    
    events: {
      'click #create-blog': 'showCreateBlogForm'
    },
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    showCreateBlogForm: function(e) {
      App.views.createBlogForm = new App.CreateBlogFormView();
      App.views.createBlogForm.render();
    },
    
    replaceMainContent: function(content) {
      $('#main-content').empty().append(content);
    }
    
  });
  
})(jQuery);