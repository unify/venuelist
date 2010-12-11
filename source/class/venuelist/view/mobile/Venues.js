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
	
	construct: function() {
		
		this.base(arguments);
		
		this.latitude = null;
        this.longitude = null;

		var self = this;
			var updatePos = function(position) {
				self.latitude = position.coords.latitude;
				self.longitude = position.coords.longitude;
				
				self.info("Location available!!!");
				self.refresh();
			};
			var updatePosErr = function(error) {
		    	alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
			};
		
		navigator.geolocation.getCurrentPosition(updatePos, updatePosErr);
		
	},
	
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

	_hasServiceRequestParams : function() {
		return this.latitude != null;
	},

    // overridden
    _getServiceParams : function() 
    {
		return {
			"lat" : this.latitude,
			"long" : this.longitude,
			"q" : this.__searchField.value || ""
		};
    },
    
    
    _renderData : function(data) 
    {
      console.debug("Got Data", data);

      try {
        var list = data.query.results.venues.group[0].venue;
      } catch(ex) {
        var list = [];
      }
      
      this.__resultList.innerHTML = list.map(function(item) {
        return "<li><label>" + item.name + " <small>in " + item.distance + "m</small></label></li>";
      }).join("");
    },
    
    
    _errorHandler : function(reason) {
      alert("Application Error: " + reason);
    },

    
    // overridden
    _createView : function() 
    {
      var layer = new unify.ui.mobile.Layer(this);
      var titlebar = new unify.ui.mobile.TitleBar(this);
      
      layer.add(titlebar);
      
      var content = this.__content = new unify.ui.mobile.ScrollView;
      content.setEnableScrollX(false);

      layer.add(content);
      
      var search = this.__searchField = document.createElement("input");
      search.type = "text";
      search.value = "Starbucks";
      content.add(search);
      
      var send = this.__sendButton = document.createElement("div");
      send.innerHTML = "Send";
      send.setAttribute("exec", "refresh");
      content.add(send);
      
      var list = this.__resultList = document.createElement("ul");
      content.add(list);

      return layer;
    },
    
    
    // overridden
    isFullScreen : function() {
      return true;
    }
  }
});
