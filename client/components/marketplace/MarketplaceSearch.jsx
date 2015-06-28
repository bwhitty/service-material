
UiMarketplaceSearch = React.createClass({
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
        <h6>Search</h6>
        {this.props.children}
      </div>
    );
  }
});
