// Shared left nav component

var {
  MenuItem,
  LeftNav
} = mui;

/**
 * Application left menu component.
 * @method toggle Toggles the navigation bar on and off.
 */
UiLeftNav = React.createClass({
  // mixins: [ReactMeteorData],

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  /**
   * Detect authorization state here??
   * TODO should this be up in App and then passed down via props? Probably.
   * @return {[type]} [description]
   */
  // getMeteorData() {
  // },

  getInitialState() {
    return {
      menuItems: [
        { route: 'sign-in', text: 'Sign in' },
        { route: 'marketplace', text: 'Marketplace' },
        { route: 'components', text: 'Components' },
        {
           type: MenuItem.Types.LINK,
           payload: 'sign-in',
           text: 'Sign in'
        },
        // {
        //    text: 'Disabled',
        //    disabled: true
        // },
        // {
        //    type: MenuItem.Types.LINK,
        //    payload: 'https://www.google.com',
        //    text: 'Disabled Link',
        //    disabled: true
        // },
      ]
    };
  },

  render() {
    return (
      <LeftNav
        ref="LeftNav"
        docked={false}
        menuItems={this.state.menuItems}
        onChange={(e, key, payload) => { this._handleTransition }}
      />
    );
  },

  /**
   * Direct mimick of LeftNav.toggle()
   * @return {void}
   */
  toggle() {
    this.refs.LeftNav.toggle();
  },

  /**
   * Handles routing from taps on menu items.
   * @param  {Event} e
   * @param  {String} key
   * @param  {mixed} payload
   * @return {void}
   */
  _handleTransition(e, key, payload) {
    // FIXME this doesn't work
    this.context.router.transitionTo(payload.route);
  }
});
