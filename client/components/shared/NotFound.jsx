var {
  Card,
  CardMedia,
  CardTitle
} = mui;

/**
 * 404 not found component.
 */
UiNotFound = React.createClass({
  render() {
    return (
      <Card>
        <CardMedia overlay={<CardTitle title="404" subtitle="This is not the page you are looking for..." />}>
            <img src="http://lorempixel.com/600/337/nature/"/>
          </CardMedia>
      </Card>
    );
  }
});
