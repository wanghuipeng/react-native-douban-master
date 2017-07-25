import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
	ScrollView
} from 'react-native';
var History = React.createClass({
    render:function() {
	      return (
			    <View style={styles.loginview}>
			       <Text>浏览历史</Text>
			    </View>
			   )
	  }
});

var styles = StyleSheet.create({
  loginview: {
    flex: 1,
    padding: 30,
    backgroundColor: '#ffffff',
  }
});

module.exports = History;