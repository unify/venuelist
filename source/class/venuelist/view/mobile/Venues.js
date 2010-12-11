/* ************************************************************************

  venuelist

  Copyright:
    2009 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/**
 * Venues View
 */
qx.Class.define("venuelist.view.mobile.Venues", {
  extend : unify.view.mobile.RemoteView,
  type : "singleton",

  members : 
  {
    __content : null,
  

    // overridden
    getTitle : function(type, param) {
      return "Venues";
    },
    
    
    // overridden
    _getBusinessObject : function() {
      return venuelist.business.Foursquare.getInstance();
    },
    

    // overridden
    _getServiceName : function() {
      return "venues";
    },


    // overridden
    _getServiceParams : function() {
      return {};
    },

    
    // overridden
    _createView : function() 
    {
      var layer = new unify.ui.mobile.Layer(this);
      var titlebar = new unify.ui.mobile.TitleBar(this);
      layer.add(titlebar);
      
      var content = this.__content = new unify.ui.mobile.Content;
      content.add("TODO");
      layer.add(content);

      return layer;
    },
    
    
    // overridden
    isFullScreen : function() {
      return true;
    }
  }
});
