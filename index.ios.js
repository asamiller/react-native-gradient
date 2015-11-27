'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var LinearGradient = require('./LinearGradient.js');

var GradientTest = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <LinearGradient 
          style={styles.gradient} 
          locations={[0, 1.0]} 
          colors={['#5ED2A0', '#339CB1']}
        />
        <Text style={styles.text}>
          Hello Gradients!
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  text: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('GradientTest', () => GradientTest);