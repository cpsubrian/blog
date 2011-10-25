(function($) {
  
  App.AppView = Backbone.View.extend({
    
    el: 'body',
    
    events: {
      
    },
    
    initialize: function() {
      _.bindAll(this); 
    },
    
    replaceMainContent: function(content) {
      $('#main-content').empty().append(content);
    }
    
  });
  
})(jQuery);