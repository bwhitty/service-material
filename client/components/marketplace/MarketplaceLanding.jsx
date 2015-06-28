var { RaisedButton } = mui;
var { Navigation } = ReactRouter;

/**
 * Marketplace landing page component
 */
UiMarketplaceLanding = React.createClass({
  mixins: [Navigation],
  
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
      <div>
        <RaisedButton
          style={{width: '100%', marginTop: 10, marginBottom: 10}}
          label="Request a service"
          primary={true}
          onClick={() => this.transitionTo('marketplace/request') } />
        <RaisedButton
          style={{width: '100%', marginTop: 10, marginBottom: 10}}
          label="Search for service providers"
          secondary={true}
          onClick={() => this.transitionTo('marketplace/search') } />
      </div>
    );
  }
});
