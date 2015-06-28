// Application footer component

var {
  Card,
  CardHeader,
  Avatar,
  ClearFix,
  Styles
} = mui;

var { Colors, Typography } = Styles;

UiAppFooter = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  render() {
    let styles = this.getStyles();

    return (
      <ClearFix>
        <Card>
          <CardHeader title="The App" subtitle="Made with love in Saratoga Springs, NY." avatar={<Avatar>A</Avatar>}></CardHeader>
        </Card>
      </ClearFix>
    );
  },

  getStyles() {
    return {
      fontWeight: Typography.fontWeightLight
    }
  }
});
