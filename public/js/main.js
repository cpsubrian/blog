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
    
    // Create AppView.
    App.views.app = new App.AppView();
    
  });
  
})(jQuery);