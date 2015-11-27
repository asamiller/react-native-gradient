import React from 'react-native';

class LinearGradient extends React.Component {
  render() {
    return <RNLinearGradient {...this.props} />;
  }
}

LinearGradient.propTypes = {
}

var RNLinearGradient = React.requireNativeComponent('RNLinearGradientSwift', LinearGradient);

export default LinearGradient;