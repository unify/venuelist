/* ************************************************************************

  venuelist

  Copyright:
    2009 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/**
 * Start View
 */
qx.Class.define("venuelist.view.mobile.Start", {
  extend : unify.view.mobile.StaticView,
  type : "singleton",

  members : 
  {
    __content : null,
  

    // overridden
    getTitle : function(type, param) {
      return "Venues";
    },

    
    // overridden
    _createView : function() 
    {
      var layer = new unify.ui.mobile.Layer(this);
      var titlebar = new unify.ui.mobile.TitleBar(this);
      layer.add(titlebar);
      
      var content = this.__content = new unify.ui.mobile.Content;
      content.add("Foursquare Venue List");
      layer.add(content);

      return layer;
    },
    
    
    // overridden
    isFullScreen : function() {
      return true;
    }
  }
});
