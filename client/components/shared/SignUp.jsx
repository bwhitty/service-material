var {
  Tabs,
  Tab,
  TextField,
  RadioButtonGroup,
  RadioButton,
  RaisedButton,
  ClearFix,
  Snackbar
} = mui;

var { Navigation } = ReactRouter;

UiSignUp = React.createClass({
  mixins: [Navigation],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getInitialState() {
    return {
      signUpFailure: null,
      signUpFailureReason: null
    };
  },

  render() {
    let signUpFailureAlert = null;
    if (this.state.signUpFailure) {
      signUpFailureAlert = (
        <Snackbar
          ref="signUpFailureAlert"
          message={this.state.signUpFailureReason}
          action="Okay"
          openOnMount={true}
          onActionTouchTap={() => this.refs.signUpFailureAlert.dismiss()} />
      );
    }

    return (
      <div>
        <Tabs>
          <Tab label="Personal account">
            <div style={{padding: 20}}>
              <TextField
                ref="personalUsername"
                hintText="Choose your app user name"
                floatingLabelText="User name" />
              <TextField
                ref="personalPassword"
                type="password"
                hintText="Choose your app password"
                floatingLabelText="Password" />
              <ClearFix>
                <RaisedButton primary={true} label="Create personal account" onClick={this._handlePersonalSignup} />
              </ClearFix>
            </div>
          </Tab>
          <Tab label="Business account">
            <div style={{padding: 20}}>
              <TextField
                ref="businessUsername"
                hintText="Choose your app user name"
                floatingLabelText="User name" />
              <TextField
                ref="businessPassword"
                type="password"
                hintText="Choose your app password"
                floatingLabelText="Password" />
              <h3>Business type</h3>
              <RadioButtonGroup name="businessType">
                <RadioButton
                  value="small"
                  label="Small business"
                  style={{maginTop: 10, marginBottom: 16}} />
                <RadioButton
                  value="independent"
                  label="Independent"
                  style={{maginTop: 10, marginBottom: 16}} />
              </RadioButtonGroup>
              <ClearFix>
                <RaisedButton primary={true} label="Create business account" onClick={this._handleBusinessSignup} />
              </ClearFix>
            </div>
          </Tab>
        </Tabs>
        {signUpFailureAlert}
      </div>
    );
  },

  _handlePersonalSignup() {
    Accounts.createUser({
      username: this.refs.personalUsername.getValue(),
      password: this.refs.personalPassword.getValue(),
      profile: {type: 'personal'}
    }, (err) => {
      if (err) {
        this.setState({signUpFailure: true, signUpFailureReason: err.reason});
      } else {
        this.transitionTo('dashboard');
      }
    });
  },

  _handleBusinessSignup() {

  },
});
