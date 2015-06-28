var {
  Avatar,
  Card,
  CardHeader
} = mui;

/**
 * Marketplace search results component
 */
UiMarketplaceSearchResults = React.createClass({
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
      <div style={{padding: 20}}>
        <Card>
          <CardHeader
            title="Bob's Garage"
            subtitle="5.2 miles"
            avatar={<Avatar>B</Avatar>}/>
        </Card>
        <Card>
          <CardHeader
            title="John Doe"
            subtitle="5.7 miles"
            avatar={<Avatar>J</Avatar>}/>
        </Card>
        <Card>
          <CardHeader
            title="George Gregory"
            subtitle="7.3 miles"
            avatar={<Avatar>G</Avatar>}/>
        </Card>
      </div>
    );
  }
});
