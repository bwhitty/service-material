var {
  Paper,
  TextField,
  RaisedButton,
  ClearFix,
  LinearProgress,
  Snackbar
} = mui;

var { Navigation } = ReactRouter;

UiSignIn = React.createClass({
  mixins: [ReactMeteorData, Navigation],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  /**
   * Special ReactMeteorData mixin method. Pump all reactive data into this.data
   * for use in render().
   * @return {{}} Reactive data
   */
  getMeteorData() {
    let data = {};

    // Show a nifty spinner!
    data.loggingIn = Meteor.loggingIn() ? true : false;

    // If we're already logged in, mark up as such and render() will handle it.
    data.shouldRedirect = Meteor.userId() ? true : false;

    return data;
  },

  getInitialState() {
    return {
      loginFailure: null,
      loginFailureReason: null
    };
  },

  render() {
    // @see getMeteorData(), redirect away if already logged in
    if (this.data.shouldRedirect) {
        this.transitionTo('/dashboard');
    }

    let loggingInProgress = null;
    if (this.data.loggingIn) {
      loggingInProgress = (
        <div style={{padding: 20, textAlign: 'center'}}>
          <LinearProgress mode="indeterminate" />
        </div>
      );
    }

    let loginFailureAlert = null;
    if (this.state.loginFailure) {
      loginFailureAlert = (
        <Snackbar
          ref="loginFailureAlert"
          message={this.state.loginFailureReason}
          action="Okay"
          openOnMount={true}
          onActionTouchTap={() => this.refs.loginFailureAlert.dismiss()} />
      );
    }

    return (
      <div style={{padding: 20}}>
        <h3>Log in</h3>
        <TextField
          ref="username"
          hintText="Your app user name"
          floatingLabelText="User name" />
        <TextField
          ref="password"
          type="password"
          hintText="Your app password"
          floatingLabelText="Password" />
        <ClearFix>
          <RaisedButton
            label="Sign in"
            primary={true}
            onClick={this._handleLogIn} />
          <RaisedButton
            label="Sign up"
            secondary={true}
            onClick={() => this.transitionTo('sign-up')}
            style={{marginLeft: 20}} />
        </ClearFix>
        {loggingInProgress}
        {loginFailureAlert}
      </div>
    );
  },

  _handleLogIn() {
    Meteor.loginWithPassword(
      this.refs.username.getValue(),
      this.refs.password.getValue(), (err) => {
        if (err) {
          this.setState({loginFailure: true, loginFailureReason: err.reason});
        }
      });
  }
});
