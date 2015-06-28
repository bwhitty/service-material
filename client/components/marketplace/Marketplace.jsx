
UiMarketplace = React.createClass({
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
        <h3>Marketplace</h3>
        {this.props.children}
      </div>
    );
  }
});
