qx.Class.define("venuelist.business.Foursquare",
{
  extend : unify.business.RemoteData,
  type : "singleton",
  
  construct : function()
  {
    this.base(arguments);
    
    this.setEnableProxy(false);
    
    this._addService("venues", {url : "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20foursquare.venues%20where%20geolat%3D%22%lat%%22%20and%20geolong%3D%22%long%%22and%20q%3D%22%q%%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=", keep: 60});
  }
});