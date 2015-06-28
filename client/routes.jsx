// todo fixme this is broken.. now can we defined routes non-inline in bootstrap.jsx?
var {
  Router,
  Route
} = ReactRouter;

ApplicationRoutes = (
  <Router history={new HashHistory()}>
    <Route path="/" component={UiApp}>
      <Route path="sign-in" component={UiSignIn} />
      <Route path="marketplace" component={UiMarketplace}>
        <Route path="/" component={UiMarketplaceLanding} />
        <Route path="request" component={UiMarketplaceRequest}>

        </Route>
        <Route path="search" component={UiMarketplaceSearch}>

        </Route>
      </Route>
    </Route>
  </Router>
);
