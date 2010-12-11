qx.Class.define("venuelist.business.Foursquare",
{
  extend : unify.business.RemoteData,
  type : "singleton",
  
  construct : function()
  {
    this.base(arguments);
    
    this._addService("venues", {url : "", keep: 60});
  }
});