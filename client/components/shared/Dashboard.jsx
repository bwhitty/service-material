var {
  Paper
} = mui;

var { Navigation } = ReactRouter;

/**
 * Containing dashboard component.
 */
UiDashboard = React.createClass({
  mixins: [Navigation, ReactMeteorData],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  getMeteorData() {
    let data = {};

    data.username = Meteor.user().username;
    data.userProfile = Meteor.user().profile;

    return data;
  },

  render() {
    // TODO should this really be done this way? Not sure if using routing,
    // or if this dynamic rendering is the correct way to render different
    // dashboard types
    let dashboard = null;
    switch (this.data.userProfile.type) {
      case 'personal':
        dashboard = (
          <Paper>
            <h3>Hi, {this.data.username}. This is a personal account.</h3>
          </Paper>
        );
        break;
      case 'business':
        dashboard = (
          <Paper>
            <h3>Hi, {this.data.username}. This is a business account.</h3>
          </Paper>
        );
        break;
      default:
        dashboard = (<Paper>Misconfigured account</Paper>);
    }

    return dashboard;
  }
});
