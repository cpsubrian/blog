(function($) {
  
  // Setup application namespace.
  window.App = {
    models: {},
    views: {},
    collections: {},
    routers: {}
  };
  
  // On DOM loaded.
  $(function() {
    
    // Silly mongo :)
    Backbone.Model.prototype.idAttribute = "_id";
    
    // Create AppView.
    App.views.app = new App.AppView();
    
    // Create Blogs Collection.
    App.collections.blogs = new App.Blogs();
    
    // Create BlogRouter
    App.routers.blog = new App.BlogRouter();
    
    // Start the History.  THIS SHOULD BE LAST.
    Backbone.history.start();
    
  });
  
})(jQuery);