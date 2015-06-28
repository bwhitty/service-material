 // Main UI component.
 // This component holds all the state for the entire application.

var {
  AppBar,
  LeftNav,
  Styles
} = mui;

UiApp = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
      <div>
        <AppBar onLeftIconButtonTouchTap={() => { this.refs.LeftNav.toggle() }} />
        <UiLeftNav ref="LeftNav" />
        {this.props.children || <UiNotFound />}
        <UiAppFooter />
      </div>
    );
  }
});
