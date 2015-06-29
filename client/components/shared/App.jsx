var {
  AppBar,
  LeftNav,
  Styles
} = mui;

var { Navigation } = ReactRouter;

/**
 * Main application container element.
 *
 * Almost all of the application state should flow down from this component to
 * its children via props.
 */
UiApp = React.createClass({
  mixins: [Navigation],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    // FIXME -- add this to the appbar
    // onRightIconButtonTouchTap={() => this.transitionTo('/') }
    // iconStyleRight={{paddingTop: 5, textAlign: 'center'}}
    // iconElementRight={<i className="fa fa-home fa-2x fa-inverse"></i>}
    return (
      <div className="ui-app-root">
        <AppBar onLeftIconButtonTouchTap={() => this.refs.LeftNav.toggle() } />
        <UiLeftNav ref="LeftNav" />
        {this.props.children || <UiNotFound />}
        <UiAppFooter />
      </div>
    );
  }
});
