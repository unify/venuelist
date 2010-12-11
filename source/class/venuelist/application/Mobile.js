/* ************************************************************************

   venuelist

   Copyright:
     2010 Deutsche Telekom AG, Germany, http://telekom.com

 ************************************************************************ */

/* ************************************************************************

#asset(venuelist/mobile/*)

************************************************************************ */

/**
 * Unify application class for mobile devices.
 */
qx.Class.define("venuelist.application.Mobile", 
{
  extend : unify.application.Mobile,

  members : 
  {
    // overridden
    main : function() 
    {
      // Call super class
      this.base(arguments);

      // Configure application
      document.title = "Foursquare Venue List";

      // Register views
      var ViewManager = unify.view.mobile.ViewManager.getInstance();
      ViewManager.add(venuelist.view.mobile.Start);
      ViewManager.add(venuelist.view.mobile.Venues);

      // Initialize navigation
      unify.view.mobile.NavigationManager.getInstance().init();   
    }
  }
});
