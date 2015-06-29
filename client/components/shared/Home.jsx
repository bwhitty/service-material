var {
  Paper,
  Card,
  CardMedia,
  CardTitle
} = mui;

UiHome = React.createClass({
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
        <CardMedia overlay={<CardTitle title="The App" subtitle="Pretty sweet"/>}>
          <img src="http://lorempixel.com/600/337/nature/"/>
        </CardMedia>
      </Card>
    );
  }
});
