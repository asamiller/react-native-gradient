import React from 'react-native';

class LinearGradient extends React.Component {
  render() {
    return <RNLinearGradient {...this.props} />;
  }
}

LinearGradient.propTypes = {
  locations: React.PropTypes.array
}

var RNLinearGradient = React.requireNativeComponent('RNLinearGradientSwift', LinearGradient);

export default LinearGradient;