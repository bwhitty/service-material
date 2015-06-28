// todo fixme this is broken.. now can we defined routes non-inline in bootstrap.jsx?
var {
  Router,
  Route
} = ReactRouter;

ApplicationRoutes = (
  <Router history={new HashHistory()}>
    <Route path="/" component={UiApp}>
      <Route path="sign-in" component={UiSignIn}></Route>
    </Route>
  </Router>
);
