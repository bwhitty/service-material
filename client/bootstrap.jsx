// Fire it up

// Import MUI theme manager and make it global so we can reuse it everywhere
ThemeManager = new mui.Styles.ThemeManager();

React.initializeTouchEvents(true);

if (Meteor.isClient) {
  Meteor.startup(() => {
    var WebFontConfig = {
      google: { families: [ 'Roboto:400,300,500:latin' ] }
    };
    (() => {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();

    // Needed so react dev tools work?
    window.React = React;

    injectTapEventPlugin();

    $(document.body).html("<div id='container'></div>");

    const { Router, Route } = ReactRouter;
    const { history } = ReactRouter.lib.HashHistory;

    // TODO: these routes need to move to routes.jsx
    React.render((
      <Router history={history}>
        <Route path="/" component={UiApp}>
          <Route path="home" component={UiHome}/>
          <Route path="sign-in" component={UiSignIn}/>
          <Route path="sign-up" component={UiSignUp}/>
          <Route path="marketplace" component={UiMarketplace}>
            <Route path="landing" component={UiMarketplaceLanding}/>
            <Route path="request" component={UiMarketplaceRequest}>
            </Route>
            <Route path="search" component={UiMarketplaceSearch}/>
            <Route path="search/results" component={UiMarketplaceSearchResults}/>
          </Route>
          <Route path="dashboard" component={UiDashboard}/>
        </Route>
      </Router>
    ), document.getElementById("container"));
  });
}
