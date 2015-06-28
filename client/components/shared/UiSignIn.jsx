// Sign-in component
var ThemeManager = new mui.Styles.ThemeManager();
var {
  Card,
  CardMedia,
  CardTitle,
} = mui;

UiSignIn = React.createClass({
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
      <Card>
        <CardMedia overlay={<CardTitle title="Sign in" subtitle="Tell me the passwords"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
      </Card>
    );
  }
});
