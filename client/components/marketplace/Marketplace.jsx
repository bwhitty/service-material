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
        {this.props.children}
      </div>
    );
  }
});
