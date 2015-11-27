import React from 'react-native';

var processColor = require('processColor');

class LinearGradient extends React.Component {



  render() {
    let nativeProps = {
      ...this.props,
      colors: processColor(this.props.colors)
    }
    return <RNLinearGradient {...nativeProps} />;
  }
}

LinearGradient.propTypes = {
  locations: React.PropTypes.array,
  colors: React.PropTypes.array
}

var RNLinearGradient = React.requireNativeComponent('RNLinearGradientSwift', LinearGradient);

export default LinearGradient;