var {
  SelectField,
  Slider,
  Checkbox,
  RaisedButton
} = mui;

var { Navigation } = ReactRouter;

/**
 * Marketplace search form component.
 */
UiMarketplaceSearch = React.createClass({
  mixins: [Navigation],

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
      serviceCategories: [
        {id: '1', name: 'Exhaust'},
        {id: '2', name: 'Belts'},
        {id: '3', name: 'Brakes'},
        {id: '4', name: 'Tires'}
      ]
    };
  },

  render: function() {
    let styles = this.getStyles();

    return (
      <div style={styles.container}>
        <SelectField
          floatingLabelText="Service category"
          valueMember="id"
          displayMember="name"
          menuItems={this.state.serviceCategories} />
        <label> Distance
          <Slider name="distance" defaultValue={0.5} step={0.10} />
        </label>
        <Checkbox
          name="asap"
          value="1"
          label="Need it done today?"/>
        <RaisedButton
          style={{width: '100%', marginTop: 10, marginBottom: 10}}
          label="Search"
          primary={true}
          onClick={() => this.transitionTo('marketplace/search/results') } />
      </div>
    );
  },

  getStyles() {
    return {
      container: {
        padding: 20,
      }
    };
  }
});
