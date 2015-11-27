import React, { requireNativeComponent, processColor } from 'react-native';
let RNLinearGradient = requireNativeComponent('RNLinearGradientSwift', LinearGradient);

class LinearGradient extends React.Component {
  render() {
    let { colors, ...otherProps } = this.props;
    return <RNLinearGradient {...otherProps} colors={colors.map(processColor)} />;
  }
}

LinearGradient.propTypes = {
  colors: React.PropTypes.array.isRequired,
  locations: React.PropTypes.array,
}

export default LinearGradient;