var {
  TextField,
  DatePicker
} = mui;

/**
 * Service request container component
 */
UiMarketplaceRequest = React.createClass({
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
          <TextField
            hintText="Make a request here"
            floatingLabelText="Request overview" />
            <DatePicker
              hintText="Have a date range?"
              showYearSelector={false} />
        {this.props.children}
      </div>
    );
  }
});
