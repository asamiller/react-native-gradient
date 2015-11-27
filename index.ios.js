/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
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
            locations={[0.2, 1.0]} 
            colors={['#000', '#FFF']}

        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },

  gradient: {
    flex:1
  }
});

AppRegistry.registerComponent('GradientTest', () => GradientTest);
