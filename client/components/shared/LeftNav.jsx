// Shared left nav component

var {
  MenuItem,
  LeftNav
} = mui;

var {
  Navigation,
  State
} = ReactRouter;

/**
 * Application left menu component.
 * @method toggle Toggles the navigation bar on and off.
 */
UiLeftNav = React.createClass({
  mixins: [
    Navigation,
    State
  ],

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
      menuItems: [
        { route: 'sign-in', text: 'Sign in' },
        { route: 'marketplace/landing', text: 'Marketplace' },
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
        onChange={(e, key, payload) => this.transitionTo(payload.route)}
        selectedIndex={this._getSelectedIndex()}
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

  _getSelectedIndex() {
    let currentItem;

    for (let i = this.state.menuItems.length - 1; i >= 0; i--) {
      currentItem = this.state.menuItems[i];
      if (currentItem.route && this.isActive(currentItem.route)) return i;
    }
  }
});
